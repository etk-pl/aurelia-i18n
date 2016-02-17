import {AureliaI18nConfigBuilder} from './config-builder';

export function configure(aurelia, configCallback) {
  let builder = new AureliaI18nConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }



  // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}