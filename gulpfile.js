'use strict';

let fs = require('fs');
let gulp = require('gulp');
let log = require('fancy-log');
let child = require('child_process');
let buffer = require('vinyl-buffer');
let source = require('vinyl-source-stream');

let less = require('gulp-less');
let gutil = require('gulp-util');
let replace = require('gulp-replace');
let browserify = require('browserify');
let terser = require('gulp-terser');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

// compile less

gulp.task('less-demos', function () {
  return gulp.src(['src/docs/demos/**/*.less', '!src/docs/demos/**/_*.less'])
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/docs/demos/'));
});
gulp.task('less-docs', gulp.series('less-demos', function () {
  return gulp.src(['src/docs/assets/styles/**/*.less', '!src/docs/assets/styles/**/_*.less'])
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/styles/'));
}));
gulp.task('less-docs:watch', function (done) {
  gulp.watch(['dist/styles/**/*.less', 'src/docs/assets/styles/**/*.less', 'src/docs/demos/**/*.less'], gulp.series('less', 'less-docs', 'site-build'));
  done();
});

gulp.task('less', function () {
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  let banner = "/*! xtend v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  return gulp.src(['dist/styles/*.less', '!dist/styles/_*.less'])
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/styles/'));
});
gulp.task('less:watch', function (done) {
  gulp.watch(['dist/styles/**/*.less'], gulp.series('less', 'site-build'));
  done();
});

// compile js

gulp.task('js-docs', function () {
  let b = browserify({
    entries: 'src/docs/assets/scripts/theme.js',
    debug: true
  });
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  let banner = "/*! xtend v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  return b.bundle()
    .pipe(source('theme.min.js'))
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(terser({
      output: {
        comments: /^!/
      }
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('src/docs/assets/scripts/'));
});
gulp.task('js-docs:watch', function (done) {
  gulp.watch(['src/docs/assets/scripts/theme.js'], gulp.series('js', 'js-docs', 'site-build'));
  done();
});

gulp.task('js', function () {
  let b = browserify({
    entries: 'src/scripts/xtend.js',
    standalone: 'Xt',
    debug: true
  });
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  let banner = "/*! xtend v" + version + " (https://getxtend.com/)\n" + "@copyright (c) 2017 - 2018 Riccardo Caroli\n" + "@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */";
  return b.bundle()
    .pipe(source('xtend.js'))
    .pipe(replace(/\/\*\![^\*]+\*\//, banner))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(terser({
      output: {
        comments: /^!/
      }
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('dist/scripts/'));
});
gulp.task('js:watch', function (done) {
  gulp.watch(['src/scripts/*.js'], gulp.series('js', 'site-build'));
  done();
});

// html

gulp.task('content:watch', function (done) {
  gulp.watch(['src/docs/**/*.html', 'src/docs/demos/**/*.js'], gulp.series('site-build'));
  done();
});

// site

gulp.task('site-build', function (callback) {
  let jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build']);
  let jekyllLogger = function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  callback();
});

gulp.task('site-serve', function (callback) {
  let jekyll = child.spawn('bundle', ['exec', 'jekyll', 'serve', '--no-watch']);
  let jekyllLogger = function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  callback();
});

// version

gulp.task('version', function () {
  const version = JSON.parse(fs.readFileSync('package.json')).version;
  log('package.json version: ' + version);
  // replace _config.yml
  return gulp.src('_config.yml', {base: './'})
    .pipe(replace(/version: (.*)/, 'version: ' + version))
    .pipe(gulp.dest('./'));
});
gulp.task('version-changed',
  gulp.series('version', gulp.parallel('less', 'js'), 'site-build')
);
gulp.task('version:watch', function (done) {
  gulp.watch(['package.json'], gulp.series('version-changed', 'site-build'));
  done();
});

// scripts

gulp.task('build',
  gulp.series('version', gulp.parallel('less', 'js'), 'site-build')
);

gulp.task('build:docs',
  gulp.series('version', gulp.parallel('less', 'js'), gulp.parallel('less-docs', 'js-docs'), 'site-build')
);

gulp.task('watch',
  gulp.series('version', gulp.parallel('less', 'js'), 'site-serve', gulp.parallel('version:watch', 'content:watch', 'less:watch', 'js:watch'))
);

gulp.task('watch:docs',
  gulp.series('version', gulp.parallel('less', 'js'), gulp.parallel('less-docs', 'js-docs'), 'site-serve', gulp.parallel('version:watch', 'content:watch', 'less-docs:watch', 'js-docs:watch'))
);

gulp.task('default', gulp.series('build'));
