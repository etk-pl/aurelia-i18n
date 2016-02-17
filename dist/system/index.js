System.register(['./config-builder'], function (_export) {
  'use strict';

  var AureliaUiConfigBuilder;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var builder = new AureliaUiConfigBuilder();

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

  return {
    setters: [function (_configBuilder) {
      AureliaUiConfigBuilder = _configBuilder.AureliaUiConfigBuilder;
    }],
    execute: function () {}
  };
});