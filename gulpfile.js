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
var stylus = require('gulp-stylus');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var nib = require('nib');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ngAnnotate = require('browserify-ngannotate');
var templateCache = require('gulp-angular-templatecache');

var config = {
  paths: {
    js: './src',
    styles: './src',
    dest: './dist',
    docs: {
      src: './docs/src/',
      app: './docs/src/examples',
      dest: './docs/dist',
    }
  },
  browserSync: {
    port: '3000',
    server: './docs'
  },
  browserify: {
    entryPoint: './src/dragularModule.js',
    outputFile: 'dragular.js',
  },
  isProd: false
};

function handleErrors(err) {
  gutil.log(err.toString());
  this.emit('end');
}

function buildScript() {

  var bundler = browserify({
    entries: config.browserify.entryPoint,
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
      .pipe(source(config.browserify.outputFile))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(gulpif(config.isProd, uglify({
        compress: { drop_console: true }
      })))
      .pipe(gulpif(config.isProd, rename({
        suffix: '.min'
      })))
      .pipe(size({
        title: 'Scripts: '
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.paths.dest))
      .pipe(browserSync.stream());
  }

  return rebundle();
}

gulp.task('browserify', function() {
  return buildScript('main.js');
});

gulp.task('styles', function() {

  return gulp.src(config.paths.styles + '/*.css')
    .pipe(autoprefixer({
      browsers: [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
      cascade: false
    }))
    .pipe(concat('dragular.css'))
    .pipe(gulpif(config.isProd, minifyCss()))
    .pipe(size({
      title: 'Styles: '
    }))
    .pipe(gulp.dest(config.paths.dest))
    .pipe(gulpif(browserSync.active, browserSync.stream()));
});

gulp.task('styles:docs', function() {
  return gulp.src([
    config.paths.docs.src + '/**/*.css',
    config.paths.styles + '/**/*.css'
  ])
  .pipe(autoprefixer({
    browsers: [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
    cascade: false
  }))
  .pipe(concat('examples.css'))
  .pipe(gulp.dest(config.paths.docs.dest))
  .pipe(gulpif(browserSync.active, browserSync.stream()));
});

gulp.task('lint', function() {

  return gulp.src([config.paths.js + '/**/*.js', './gulpfile.js'])
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
  return gulp.src(config.paths.docs.app + '/**/*.html')
   .pipe(templateCache({
     moduleSystem: 'Browserify',
     standalone: true,
   }))
   .pipe(gulp.dest(config.paths.docs.app));
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(config.paths.styles + '*.css',  ['styles']);
});

gulp.task('watch:docs', ['serve'], function() {
  gulp.watch(config.paths.docs.src + '/**/*.css',  ['styles:docs']);
  gulp.watch(config.paths.docs.app + '/**/*.html',  ['templates:docs']);
});

gulp.task('dev', function() {
  config.isProd = false;
  config.browserify = {
    entryPoint: './src/dragularModule.js',
    outputFile: 'dragular.js',
  };

  config.paths.dest = './dist';

  sequence(['browserify', 'styles'], 'watch');
});

gulp.task('dev:docs', function() {
  config.isProd = false;
  config.browserify = {
    entryPoint: './docs/src/examples/examplesApp.js',
    outputFile: 'examples.js',
  };

  config.paths.dest = './docs/dist';

  sequence(['browserify', 'styles:docs', 'templates:docs'], 'watch:docs');
});

gulp.task('build', function() {
  config.isProd = true;
  sequence(['browserify', 'styles']);
});
