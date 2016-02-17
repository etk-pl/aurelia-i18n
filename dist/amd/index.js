define(['exports', './config-builder'], function (exports, _configBuilder) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(aurelia, configCallback) {
    var builder = new _configBuilder.AureliaI18nConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    if (builder.resources.length === 0) {
      builder.core();
    }

    var resources = builder.resources;

    if (builder.useGlobalResources) {
      aurelia.globalResources(resources);
    }
  }
});