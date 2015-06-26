var aurelia = require('aurelia-cli');

aurelia.command('bundle', {
  js: {
    "dist/app-bundle": {
      modules: [
        '*',
        'converters/*',
        'modalBodies/*',
        'aurelia-bootstrapper',
        'aurelia-http-client',
        'aurelia-router',
        'aurelia-templating-binding',
        'aurelia-templating-resources',
        'aurelia-templating-router',
        'aurelia-loader-default',
        'aurelia-history-browser',
        "aurelia-dependency-injection",
        "aurelia-framework",
        "aurelia-templating",
        "aurelia-validation",
        'aurelia-event-aggregator',
        'jquery',
        'bootstrap',
        'css',
        'numeral',
        'github:lipsitzm/aurelia-bs-modal@master'
      ],
      options: {
        inject: true
      }
    }
  },
  template: {
    "dist/app-bundle": {
      pattern: 'dist/**/*.html',
      options: {
        inject: true
      }
    }
  }
});
