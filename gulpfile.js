'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var browserify = require('browserify');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var source = require('vinyl-source-stream');
var sequence = require('run-sequence');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ngAnnotate = require('browserify-ngannotate');
var templateCache = require('gulp-angular-templatecache');
var ghPages = require('gulp-gh-pages');

var config = {
  dragular: {
    scripts: './src/*.js',
    styles: './src/*.css',
    dest: './dist'
  },
  docs: {
    src: './docs/src/examples',
    scripts: './docs/src/examples/**/*.js',
    styles: './docs/src/**/*.css',
    templates: './docs/src/examples/**/*.html',
    dest: './docs/dist'
  },
  browserSync: {
    port: '3000',
    server: './docs'
  },
  browserify: {
    dragular: {
      entryPoint: './src/dragularModule.js',
      bundleName: 'dragular.js',
      dest: './dist',
    },
    docs: {
      entryPoint: './docs/src/examples/examplesApp.js',
      bundleName: 'examples.js',
      dest: './docs/dist'
    }
  },
  isProd: false
};

var browserifyDefaults = config.browserify.dragular;

function handleErrors(err) {
  gutil.log(err.toString());
  this.emit('end');
}

function buildScript() {

  var bundler = browserify({
    entries: browserifyDefaults.entryPoint,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }, watchify.args);

  var transforms = [
    'brfs',
    'bulkify',
    ngAnnotate
  ];

  if (!config.isProd) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      rebundle();
    });
  }

  transforms.forEach(function(transform) {
    bundler.transform(transform);
  });

  function rebundle() {
    var stream = bundler.bundle();

    return stream.on('error', handleErrors)
      .pipe(source(browserifyDefaults.bundleName))
      .pipe(buffer())
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
      .pipe(gulp.dest(browserifyDefaults.dest))
      .pipe(browserSync.stream());
  }

  return rebundle();
}

gulp.task('browserify', function() {
  return buildScript();
});

gulp.task('styles', function() {

  return gulp.src(config.dragular.styles)
    .pipe(autoprefixer({
      browsers: [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
      cascade: false
    }))
    .pipe(concat('dragular.css'))
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

  return gulp.src(config.docs.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('serve', function () {

  browserSync({
    port: config.browserSync.port,
    server: {
      baseDir: config.browserSync.server,
    },
    logConnections: true,
    logFileChanges: true,
    notify: true
  });
});

gulp.task('templates:docs', function() {

  return gulp.src(config.docs.templates)
   .pipe(templateCache({
     moduleSystem: 'Browserify',
     standalone: true,
   }))
   .pipe(gulp.dest(config.docs.src));
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(config.dragular.styles,  ['styles']);
});

gulp.task('watch:docs', ['serve'], function() {
  gulp.watch(config.docs.styles,  ['styles:docs']);
  gulp.watch(config.docs.templates,  ['templates:docs']);
});

gulp.task('dev', function() {
  config.isProd = false;
  browserifyDefaults = config.browserify.dragular;

  sequence(['browserify', 'styles'], 'watch');
});

gulp.task('dev:docs', function() {
  config.isProd = false;
  browserifyDefaults = config.browserify.docs;

  sequence(['browserify', 'styles:docs', 'templates:docs'], 'watch:docs');
});

gulp.task('build', function() {
  config.isProd = true;
  browserifyDefaults = config.browserify.dragular;

  sequence(['browserify', 'styles']);
});

gulp.task('build:docs', function() {
  config.isProd = true;
  browserifyDefaults = config.browserify.docs;

  config.isProd = true;
  sequence(['browserify', 'styles']);
});

gulp.task('deploy:docs', function() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages());
});
