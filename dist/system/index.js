System.register(['./config-builder'], function (_export) {
  'use strict';

  var AureliaI18nConfigBuilder;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var builder = new AureliaI18nConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    var resources = builder.resources;

    if (builder.useGlobalResources) {
      aurelia.globalResources(resources);
    }
  }

  return {
    setters: [function (_configBuilder) {
      AureliaI18nConfigBuilder = _configBuilder.AureliaI18nConfigBuilder;
    }],
    execute: function () {}
  };
});