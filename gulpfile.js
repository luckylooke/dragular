/* global process */
'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const webpack = require('webpack-stream');
const size = require('gulp-size');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const templateCache = require('gulp-angular-templatecache');
const ghPages = require('gulp-gh-pages');
const sourcemaps = require('gulp-sourcemaps');
const markdown = require('gulp-markdown');

const config = {
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
  // Predefined scripts & styles configs to keep tasks DRY
  scripts: {
    libraryTarget: 'umd',
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
  styles: {
    dragular: {
      entryPoint: './src/*.css',
      bundleName: 'dragular.css',
      dest: './dist'
    },
    docs: {
      entryPoint: [
        './src/*.css',
        './docs/src/**/*.css'
      ],
      bundleName: 'examples.css',
      dest: './docs/dist'
    }
  },
  // A flag attribute to switch modes
  isProd: false
};

const tasks = {};

/*
* selectedConfigs stores temporary scripts & styles settings (like entry point or
* output directory). This metadata is used to configure the webpack compilation
* process.
*/
let selectedConfigs = {
  scripts: config.scripts.dragular,
  styles: config.styles.dragular
}

function handleErrors(err) {
  gutil.log(err.toString());
  this.emit('end');
}

tasks.lint = gulp.series(function lint() {
  return gulp.src([config.dragular.scripts])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

tasks.lint_docs = gulp.series(function lintDocs() {
  return gulp.src([config.docs.scripts, '!./docs/src/examples/templates.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

tasks.scripts = gulp.series(selectedConfigs.scripts.type === 'dragular' ? tasks.lint : tasks.lint_docs, function scriptsTask(done) {
    console.log('selected configs: ', selectedConfigs);
    return gulp.src(selectedConfigs.scripts.entryPoint)
      .on('error', handleErrors)
      .pipe(webpack({
        watch: config.isProd ? false : true,
        output: {
          libraryTarget: config.scripts.libraryTarget,
          filename: selectedConfigs.scripts.bundleName
        }
      }, null, function(err, stats) {
        if ( err ) {
          throw err;
        }
        console.log('webpack build finished in ', stats.endTime - stats.startTime, 'ms');
        done();
      }))
      .pipe(gulpif(config.isProd, gulp.dest(selectedConfigs.scripts.dest)))
      .pipe(gulpif(config.isProd, size({
        title: 'Non-minified scripts: '
      })))
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
      .pipe(gulp.dest(selectedConfigs.scripts.dest))
      .pipe(gulpif(browserSync.active, browserSync.stream()));
  }
);

tasks.styles = gulp.series(function stylesTask() {
  return gulp.src(selectedConfigs.styles.entryPoint)
    .pipe(autoprefixer({
      browsers: [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
      cascade: false
    }))
    .pipe(concat(selectedConfigs.styles.bundleName))
    .pipe(gulpif(config.isProd, gulp.dest(selectedConfigs.styles.dest)))
    .pipe(gulpif(config.isProd, size({
      title: 'Non-minified styles:  '
    })))
    .pipe(gulpif(config.isProd, minifyCss()))
    .pipe(gulpif(config.isProd, rename({
      suffix: '.min'
    })))
    .pipe(size({
      title: 'Styles: '
    }))
    .pipe(gulp.dest(selectedConfigs.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.stream()));
  }
);

tasks.serve = gulp.series(function serve(done) {
  browserSync({
    ui:{
      port: '8081'
    },
    port: (typeof process !== 'undefined' && process.env.PORT) || config.browserSync.port, // cloud9 improvement
    host: typeof process !== 'undefined' && process.env.IP, // cloud9 improvement
    server: {
      baseDir: config.browserSync.server
    },
    logConnections: true,
    logFileChanges: true,
    notify: true
  });
  done();
});

/*
* Concatenate and register templates in the $templateCache. The resulting file
* (templates.js) is placed inside the directory specified in config.docs.src.
*/
tasks.templates_docs = gulp.series(function templatesDocs() {
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
tasks.watch = gulp.series(tasks.serve, function watch(done) {
  gulp.watch(config.dragular.styles, tasks.styles);
  gulp.watch(config.dragular.scripts, tasks.scripts);
  done();
});

tasks.watch_docs = gulp.series(tasks.serve, function watchDocs(done) {
  console.log('watching docs');
  gulp.watch(config.dragular.styles,  tasks.styles);
  gulp.watch(config.dragular.scripts,  tasks.scripts);
  gulp.watch(config.docs.styles,  tasks.styles);
  gulp.watch(config.docs.scripts,  tasks.scripts);
  gulp.watch(config.docs.templates,  tasks.templates_docs);
  gulp.watch(config.docs.index, browserSync.reload);
  gulp.watch('./CONTRIBUTING.md', tasks.markdown);
  done();
});

/*
* Launch browserSync server, watch & automatically refresh connected browsers
* on changes, generate non-minified but concatenated output.
*/
tasks.dev = gulp.series(function dev(done) {
  config.isProd = true;
  selectedConfigs = {
    scripts: config.scripts.dragular,
    styles: config.styles.dragular
  };
  done();
}, gulp.parallel(tasks.scripts, tasks.styles), tasks.watch);

/*
* Compiles markdown to html.
*/
tasks.markdown = gulp.series(function markdownTask() {
  return gulp.src('./CONTRIBUTING.md')
    .pipe(markdown())
    .pipe(gulpif('**/CONTRIBUTING.html', rename({basename: 'contribute'})))
    .pipe(gulp.dest(config.docs.src + '/partials/autogenerated'));
});

tasks.dev_docs = gulp.series(function devDocs(done) {
  config.isProd = false;
  selectedConfigs = {
    scripts: config.scripts.docs,
    styles: config.styles.docs
  };
  done();
}, tasks.markdown, tasks.templates_docs, gulp.parallel(tasks.scripts, tasks.styles), tasks.watch_docs);

tasks.build_docs = gulp.series(function buildDocs(done) {
  config.isProd = true;
  selectedConfigs = {
    scripts: config.scripts.docs,
    styles: config.styles.docs
  };
  done();
}, tasks.markdown, tasks.templates_docs, gulp.parallel(tasks.scripts, tasks.styles));

/*
* Generate production ready minified and concantenated output.
*/
tasks.build = gulp.series(function build(done) {
  config.isProd = true;
  selectedConfigs = {
    scripts: config.scripts.dragular,
    styles: config.styles.dragular
  };
  done();
}, gulp.parallel(tasks.scripts, tasks.styles), tasks.build_docs);

/*
* Publish code to GitHub pages.
*/
tasks.deploy_docs = gulp.series(function deployDocs() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages());
});


exports.build = tasks.build;
gulp.task('dev:docs', tasks.dev_docs);
gulp.task('deploy:docs', tasks.deploy_docs);
