'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _aureliaHttpClient = require('aurelia-http-client');

var _i18nBaseConfig = require('./i18n/base-config');

var AureliaI18nConfigBuilder = (function () {
    function AureliaI18nConfigBuilder() {
        _classCallCheck(this, AureliaI18nConfigBuilder);

        this.resources = [];
        this.useGlobalResources = true;
    }

    _createClass(AureliaI18nConfigBuilder, [{
        key: 'extend',
        value: function extend(destination, source) {
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
    }, {
        key: 'setup',
        value: function setup(obj) {
            _i18nBaseConfig.BaseConfig.setDefault();

            var obj = this.extend(_i18nBaseConfig.BaseConfig.current(), obj);

            var httpC = new _aureliaHttpClient.HttpClient();
            try {
                httpC.get(obj.path).then(function (response) {
                    _i18nBaseConfig.BaseConfig.setDef(JSON.parse(response.response));
                });
            } catch (e) {
                console.log('error', e);
            }

            this.core();
            return this;
        }
    }, {
        key: 'core',
        value: function core() {
            this.resources.push('i18n/t');
            return this;
        }
    }]);

    return AureliaI18nConfigBuilder;
})();

exports.AureliaI18nConfigBuilder = AureliaI18nConfigBuilder;