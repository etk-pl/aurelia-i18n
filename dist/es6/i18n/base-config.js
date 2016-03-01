export class BaseConfig {

    static current() {
        return BaseConfig._current;
    }

    static setDefault() {
        BaseConfig._current = {
            path: 'translate/en/interface.json',
            dev:false
        };
    }

    static setConfig(obj) {
        BaseConfig._current = obj;
    }

    static setDef(obj) {
        BaseConfig._def = obj;
    }

    static getDef(obj) {
        return BaseConfig._def
    }
}