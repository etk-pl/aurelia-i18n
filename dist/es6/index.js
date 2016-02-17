import {AureliaUiConfigBuilder} from './config-builder';


export function configure(aurelia, configCallback) {
  let builder = new AureliaUiConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  // Provide core if nothing was specified
  if (builder.resources.length === 0) {
    builder.core();
  }

  // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}