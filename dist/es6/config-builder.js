import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {BaseConfig} from './i18n/base-config';

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
        BaseConfig.setDefault();

        var obj=this.extend(BaseConfig.current(),obj);

        var httpC = new HttpClient();
        try{
            httpC.get(obj.path).then(response => {
				console.log(response);
                BaseConfig.setDef(JSON.parse(response.response));
            });
        }
        catch (e)
        {
            console.log('error',e);
        }

        this.core();
        return this;
    }


    core():AureliaI18nConfigBuilder {
        this.resources.push('i18n/t');
        return this;
    }



}