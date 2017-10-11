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
import fontkit from 'fontkit';
import fs from 'fs';
import ejs from 'gulp-ejs';

var plugins = gulpLoadPlugins();
var config;

import webpackLib from './webpack.lib';
import webpackApp from './webpack.app';

const srcPath = './src';
const outputPath = './build';
const docsPath = './docs';
const scssPath = './scss';

var getHeader = () => {
  var data = fs.readFileSync('./package.json');
  const version = JSON.parse(data).version;
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
    .pipe(gulp.dest('./build'));
});

gulp.task('scss:build', function () {
  return gulp.src('./scss/ronda.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ basename: 'ronda.min' }))
    .pipe(gulp.dest('./build'));
});

gulp.task('scss:app', function () {
  return gulp.src('./docs/app/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs'));
});

gulp.task('html:dev', () => {
  return gulp.src('./_index.html')
    .pipe(ejs({ basehref: '/' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('./'));
});

gulp.task('html:build', () => {
  return gulp.src('./_index.html')
    .pipe(ejs({ basehref: '/ronda-ui/' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('./'));
});

// generate icons scss & html
gulp.task('generate:icons', (cb) => {
  let font = fontkit.openSync('./fonts/ronda.ttf');

  let iconsScss = [
      '/**'
    , ' * WARNING: This file is autogenerated.'
    , ' */'
    , ' '
  ];

  let iconsHTML = [
      '<!--'
    , ' WARNING: This file is autogenerated.'
    , ' -->'
    , ' '
  ];

  iconsHTML.push('<ul class="ronda-icons-list">')

  font.characterSet.forEach(function(codePoint) {
    let glyph = font.glyphForCodePoint(codePoint);
    let hex = codePoint.toString(16);
    let name = glyph.name.replace(/\_/ig, '-');
    
    if (name === '.notdef'){
      return
    }

    iconsScss.push(`.ri-${name}:before {`);
    iconsScss.push(`\tcontent: "\\${hex}";`);
    iconsScss.push(`}\n`);
    iconsHTML.push('\t<li>');
    iconsHTML.push(`\t\t<i class="ri ri-${name}"></i>`);
    iconsHTML.push(`\t\t<span class="glyphicon-class">ri ri-${name}</span>`);
    iconsHTML.push('\t</li>');
  });

  iconsHTML.push('</ul>')

  let contentScss = iconsScss.join('\n');
  let contentHTML = iconsHTML.join('\n');

  fs.writeFileSync('./scss/_icons-gen.scss', contentScss);
  fs.writeFileSync('./docs/app/main/sections/icons-gen.html', contentHTML);
  cb();
});

// upgrade patch version
gulp.task('bump', function(){
  return gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

// create the web server
gulp.task('webserver', function() {
  return gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false
    }));
});

// inject the comments
gulp.task('copyright', function() {
  return gulp.src(['./build/*.js', './build/*.css'])
    .pipe(headerComment(getHeader()))
    .pipe(gulp.dest('./build/'));
});

// webpack
gulp.task('webpack:lib', ['webpack:lib:dev', 'webpack:lib:build']);
gulp.task('webpack', ['webpack:lib', 'webpack:app']);

// inject & css
gulp.task('inject', ['inject:scss']);
gulp.task('scss', ['inject', 'scss:dev', 'scss:build', 'scss:app'])

// build!
gulp.task('build', ['webpack', 'scss', 'bump', 'html:build'],  () => {
  gulp.start('copyright');  
});

gulp.task('dev', ['html:dev', 'webpack', 'scss']);

gulp.task('serve', ['dev', 'webserver'], () => {
  gulp.start('watch');  
});

gulp.task('watch', () => {
  gulp.watch(
      ['./src/**/*', './scss/**/*', './docs/{app,components}/**/*', '!./scss/_components.scss'],
      ['dev']
    );  
});