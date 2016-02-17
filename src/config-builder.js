export class AureliaI18nConfigBuilder {

    resources: string[] = [];
    useGlobalResources: boolean = true;


    setup(obj):AureliaI18nConfigBuilder {
        console.log(obj)
        this.core();
        return this;
    }


    core():AureliaI18nConfigBuilder {
        this.resources.push('i18n/i18n');
        return this;
    }




}