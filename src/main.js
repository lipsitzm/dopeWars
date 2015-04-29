export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // Install the plugin
    .plugin('lipsitzm/aurelia-bs-modal');

  aurelia.start().then(a => a.setRoot());
}
