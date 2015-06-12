var gulp = require('gulp'),
    paths = require('../paths'),
    shell = require('gulp-shell');

var bundles = [
  {
    module: 'main',
    name: 'bundled'
  }
];

//////////////////////////////
//
// HACK ALERT
//
// Have to do both a /dist/app-bundle.js and app-bundle.js because there's an issue with the relative paths
// The files are served out of dist/ but the bundle needs to be injected in without the dist otherwise it looks for it at /dist/dist/app-bundle.js
//
// In config.js, the app-bundle array must be before the dist/app-bundle array
//
// Can't minify because then the validation messages / promise handling doesn't work right
//
//////////////////////////////
var bundleCmd = 'jspm bundle main ';

gulp.task('build-dist-bundles',
  shell.task(
    bundles.map(function (bundle) {
      return bundleCmd + 'app-bundle.js --inject';
    }))
);
gulp.task('build-bundles',
  shell.task(
    bundles.map(function (bundle) {
      return bundleCmd + paths.output + 'app-bundle.js';
    }))
);
