var gulp = require('gulp'),
    paths = require('../paths'),
    shell = require('gulp-shell');

var bundles = [
  {
    module: 'main',
    name: 'bundled'
  }
];

gulp.task('build-bundles',
  shell.task(
    bundles.map(function (bundle) {
      return 'jspm bundle \'*\' + aurelia-dope-wars/* + aurelia-bootstrapper + aurelia-http-client + aurelia-dependency-injection + aurelia-router ' + paths.output + 'app-bundle.js --inject';
    }))
);
