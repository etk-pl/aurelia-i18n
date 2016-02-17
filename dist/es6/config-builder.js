import {inject} from 'aurelia-framework';
var baseConfig=require('./i18n/base-config');

export class AureliaI18nConfigBuilder {

    resources: string[] = [];
    useGlobalResources: boolean = true;

    extend(destination, source) {
        destination = destination || {};
        source = source || {};
        for (var property in source) {
            if (source.hasOwnProperty(property) && source[property] && source[property].constructor && source[property].constructor === Object) {
                if (!(destination[property] && destination[property].constructor && destination[property].constructor === Object)) {
                    destination[property] = {};
                }
                this.extend(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    setup(obj):AureliaI18nConfigBuilder {

        var baseConfig1 = baseConfig.current();

        //this.extend(obj);
        console.log(baseConfig1);
        this.core();
        return this;
    }


    core():AureliaI18nConfigBuilder {
        this.resources.push('i18n/i18n');
        return this;
    }



}