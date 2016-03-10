/* global process */
'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var webpack = require('webpack-stream');
var size = require('gulp-size');
var sequence = require('run-sequence');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var ghPages = require('gulp-gh-pages');
var sourcemaps = require('gulp-sourcemaps');
var markdown = require('gulp-markdown');

var config = {
  dragular: {
    scripts: './src/*.js',
    styles: './src/*.css',
    dest: './dist'
  },
  docs: {
    src: './docs/src/examples',
    index: './docs/index.html',
    scripts: './docs/src/examples/**/*.js',
    styles: './docs/src/**/*.css',
    templates: './docs/src/examples/**/*.html',
    dest: './docs/dist'
  },
  browserSync: {
    port: '3000',
    server: './docs'
  },
  // Predefined scripts configs to keep tasks DRY
  scripts: {
    dragular: {
      type: 'dragular',
      entryPoint: './src/dragularModule.js',
      bundleName: 'dragular.js',
      dest: './dist'
    },
    docs: {
      type: 'docs',
      entryPoint: './docs/src/examples/examplesApp.js',
      bundleName: 'examples.js',
      dest: './docs/dist'
    }
  },
  // A flag attribute to switch modes
  isProd: false
};

/*
* scriptDefaults stores current scripts settings (like entry point or
* output directory). This metadata is used to configure the webpack compilation
* process.
*/
var scriptDefaults = config.scripts.dragular;

function handleErrors(err) {
  gutil.log(err.toString());
  this.emit('end');
}

/*
* See http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
*/
function buildScript() {

  function rebundle() {
    return gulp.src(scriptDefaults.entryPoint)
      .on('error', handleErrors)
      .pipe(webpack({
        watch: config.isProd ? false : true,
        output: {
          filename: scriptDefaults.bundleName
        }
      }))
      .pipe(gulpif(config.isProd, gulp.dest(scriptDefaults.dest)))
      .pipe(gulpif(config.isProd, sourcemaps.init({loadMaps: true})))
      .pipe(gulpif(config.isProd, uglify({
        compress: { drop_console: true }
      })))
      .pipe(gulpif(config.isProd, rename({
        suffix: '.min'
      })))
      .pipe(size({
        title: 'Scripts: '
      }))
      .pipe(gulpif(config.isProd, sourcemaps.write('./')))
      .pipe(gulp.dest(scriptDefaults.dest))
      .pipe(gulpif(browserSync.active, browserSync.stream()));
  }

  function lintAndRebundle() {
    if (scriptDefaults.type === 'dragular') {
      return sequence('lint', rebundle);
    }

    return sequence('lint:docs', rebundle);
  }

  return lintAndRebundle();
}

gulp.task('scripts', function() {
  return buildScript();
});

gulp.task('styles', function() {

  return gulp.src(config.dragular.styles)
    .pipe(autoprefixer({
      browsers: [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
      cascade: false
    }))
    .pipe(concat('dragular.css'))
    .pipe(gulpif(config.isProd, gulp.dest(config.dragular.dest)))
    .pipe(gulpif(config.isProd, minifyCss()))
    .pipe(gulpif(config.isProd, rename({
      suffix: '.min'
    })))
    .pipe(size({
      title: 'Styles: '
    }))
    .pipe(gulp.dest(config.dragular.dest))
    .pipe(gulpif(browserSync.active, browserSync.stream()));
});

gulp.task('styles:docs', function() {

  return gulp.src([
    config.docs.styles,
    config.dragular.styles
  ])
  .pipe(autoprefixer({
    browsers: [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
    cascade: false
  }))
  .pipe(concat('examples.css'))
  .pipe(gulp.dest(config.docs.dest))
  .pipe(gulpif(browserSync.active, browserSync.stream()));
});

gulp.task('lint', function() {

  return gulp.src([config.dragular.scripts])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint:docs', function() {

  return gulp.src([config.docs.scripts, '!./docs/src/examples/templates.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('serve', function () {

  browserSync({

    port: (typeof process !== 'undefined' && process.env.PORT) || config.browserSync.port, // cloud9 improvement
    server: {
      baseDir: config.browserSync.server
    },
    logConnections: true,
    logFileChanges: true,
    notify: true
  });
});

/*
* Concatenate and register templates in the $templateCache. The resulting file
* (templates.js) is placed inside the directory specified in config.docs.src.
*/
gulp.task('templates:docs', function() {

  return gulp.src(config.docs.templates)
    .pipe(templateCache({
      moduleSystem: 'Browserify',
      standalone: true
    }))
    .pipe(gulp.dest(config.docs.src));
});

/*
* Watch files for changes
*/
gulp.task('watch', ['serve'], function() {
  gulp.watch(config.dragular.styles,  ['styles']);
});

gulp.task('watch:docs', ['serve'], function() {
  gulp.watch(config.docs.styles,  ['styles:docs']);
  gulp.watch(config.docs.templates,  ['templates:docs']);
  gulp.watch(config.docs.index, browserSync.reload);
  gulp.watch('./CONTRIBUTING.md', ['markdown']);
});

/*
* Launch browserSync server, watch & automatically refresh connected browsers
* on changes, generate non-minified but concatenated output.
*/
gulp.task('dev', function() {
  config.isProd = false;
  scriptDefaults = config.scripts.dragular;

  sequence(['scripts', 'styles'], 'watch');
});

gulp.task('dev:docs', function() {
  config.isProd = false;
  scriptDefaults = config.scripts.docs;

  sequence('markdown', 'templates:docs', ['scripts', 'styles:docs'], 'watch:docs');
});

/*
* Generate production ready minified and concantenated output.
*/
gulp.task('build', function() {
  config.isProd = true;
  scriptDefaults = config.scripts.dragular;

  sequence(['scripts', 'styles'], 'build:docs');
});

gulp.task('build:docs', function() {
  config.isProd = true;
  scriptDefaults = config.scripts.docs;

  sequence('markdown', 'templates:docs', ['scripts', 'styles']);
});

/*
* Publish code to GitHub pages.
*/
gulp.task('deploy:docs', function() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages());
});

/*
* Compiles markdown to html.
*/
gulp.task('markdown', function () {

  return gulp.src('./CONTRIBUTING.md')
    .pipe(markdown())
    .pipe(gulpif('**/CONTRIBUTING.html', rename({basename: 'contribute'})))
    .pipe(gulp.dest(config.docs.src + '/partials/autogenerated'));
});
