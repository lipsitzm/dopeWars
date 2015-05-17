export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // Install the plugins
    .plugin('lipsitzm/aurelia-bs-modal')
    .plugin('aurelia-validation');

  aurelia.start().then(a => a.setRoot());
}
