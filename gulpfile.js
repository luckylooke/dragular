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

var config = {
  paths: {
    js: '',
    styles: '',
    dest: 'dist'
  },
  isProd: false
};

function handleErrors(err) {
  gutil.log(err.toString());
  this.emit("end");
}

function buildScript(file) {

  var bundler = browserify({
    entries: config.paths.js + 'dragular.js',
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }, watchify.args);

  if (!config.isProd) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      rebundle();
    });
  }

  function rebundle() {
    var stream = bundler.bundle();

    return stream.on('error', handleErrors)
      .pipe(source('dragular.js'))
      .pipe(buffer())
      .pipe(gulpif(config.isProd, uglify({
        compress: { drop_console: true }
      })))
      .pipe(gulpif(config.isProd, rename({
        suffix: '.min'
      })))
      .pipe(size({
        title: 'Scripts: '
      }))
      .pipe(gulp.dest(config.paths.dest));
  }

  return rebundle();
}

gulp.task('browserify', function() {
  return buildScript('main.js');
});

gulp.task('styles', function() {
  return gulp.src(config.paths.styles + 'dragular.styl')
    .pipe(stylus({
      use: nib()
    }))
    .pipe(autoprefixer({
      browsers: [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
      cascade: false
    }))
    .pipe(gulpif(config.isProd, minifyCss()))
    .pipe(gulpif(config.isProd, rename({
      suffix: '.min'
    })))
    .pipe(size({
      title: 'Styles: '
    }))
    .pipe(gulp.dest(config.paths.dest));
});

gulp.task('dev', function() {
  config.isProd = false;
  sequence(['browserify', 'styles']);
});

gulp.task('build', function() {
  config.isProd = true;
  sequence(['browserify', 'styles']);
});
