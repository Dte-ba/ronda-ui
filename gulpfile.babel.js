import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack-stream';
import bump from 'gulp-bump';
import headerComment from 'gulp-header-comment';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import webserver from 'gulp-webserver';
import watch from 'gulp-watch';
import batch from 'gulp-batch';

var plugins = gulpLoadPlugins();
var config;

import webpackLib from './webpack.lib';
import webpackApp from './webpack.app';

const srcPath = './src';
const outputPath = './build';
const docsPath = './docs';
const scssPath = './scss';

var getHeader = () => {
  const version = require('./package.json').version;
  return [
    ` @license Ronda UI v${version}`,
    ' Copyright (c) 2017 Dte-ba',
    ' MIT License'
  ].join('\n');
};

gulp.task('webpack:lib:dev', function() {
  const wconfig = webpackLib();

  return gulp.src(wconfig.entry)
    .pipe(plugins.plumber())
    .pipe(webpack(wconfig))
    .pipe(gulp.dest(outputPath));
});

gulp.task('webpack:lib:build', function() {
  const wconfig = webpackLib({ BUILD: true });
  return gulp.src(wconfig.entry)
    .pipe(plugins.plumber())
    .pipe(webpack(wconfig))
    .pipe(gulp.dest(outputPath));
});

gulp.task('webpack:app', function() {
  const wconfig = webpackApp();
  return gulp.src(wconfig.entry)
    .pipe(plugins.plumber())
    .pipe(webpack(wconfig))
    .pipe(gulp.dest(docsPath));
});

gulp.task('inject:scss', () => {
  return gulp.src('./scss/_components.scss')
    .pipe(plugins.inject(
      gulp.src([`${srcPath}/components/**/*.scss`], {read: false})
        .pipe(plugins.sort()), {
        transform: (filepath) => {
          let newPath = filepath
            .replace(`/${srcPath}/components/`, '../src/components/')
            .replace(/_(.*).scss/, (match, p1, offset, string) => p1)
            .replace('.scss', '');
          return `@import '${newPath}';`;
        }
      }))
    .pipe(gulp.dest(scssPath));
});

gulp.task('scss:dev', function () {
  return gulp.src('./scss/ronda.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(headerComment(getHeader()))
    .pipe(gulp.dest('./build'));
});

gulp.task('scss:build', function () {
  return gulp.src('./scss/ronda.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(headerComment(getHeader()))
    .pipe(rename({ basename: 'ronda.min.css' }))
    .pipe(gulp.dest('./build'));
});

gulp.task('scss:app', function () {
  return gulp.src('./docs/app/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(headerComment(getHeader()))
    .pipe(gulp.dest('./docs'));
});

// upgrade patch version
gulp.task('bump', function(){
  return gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

gulp.task('webserver', function() {
  return gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false
    }));
});

// webpack
gulp.task('webpack:lib', ['webpack:lib:dev', 'webpack:lib:build']);
gulp.task('webpack', ['webpack:lib', 'webpack:app']);

// inject & css
gulp.task('inject', ['inject:scss']);
gulp.task('scss', ['inject', 'scss:dev', 'scss:build', 'scss:app'])

// build!
gulp.task('build', ['webpack', 'bump', 'scss']);

gulp.task('dev', ['webpack', 'scss']);

gulp.task('serve', ['dev', 'webserver', 'watch']);

gulp.task('watch', () => {
  gulp.watch(
      ['./src/**/*', './scss/**/*', './docs/app/**/*'],
      ['dev']
    );  
});