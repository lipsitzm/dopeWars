var gulp = require('gulp'),
    paths = require('../paths'),
    shell = require('gulp-shell');

var bundles = [
  {
    module: 'main',
    name: 'bundled'
  }
];

var bundleCmd = 'jspm bundle \'*\' + aurelia-dope-wars/* + aurelia-bootstrapper + aurelia-loader-default + aurelia-templating-binding + aurelia-dependency-injection + aurelia-router + aurelia-templating-resources + aurelia-history-browser + aurelia-templating-router + aurelia-validation + jquery + bootstrap + css + numeral + lipsitzm/aurelia-bs-modal ';

gulp.task('build-dist-bundles',
  shell.task(
    bundles.map(function (bundle) {
      return bundleCmd + ' app-bundle.js --inject';
    }))
);
gulp.task('build-bundles',
  shell.task(
    bundles.map(function (bundle) {
      return bundleCmd + paths.output + 'app-bundle.js';
    }))
);
