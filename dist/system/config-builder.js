System.register(['aurelia-framework', 'aurelia-http-client', './i18n/base-config'], function (_export) {
    'use strict';

    var inject, HttpClient, BaseConfig, AureliaI18nConfigBuilder;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_i18nBaseConfig) {
            BaseConfig = _i18nBaseConfig.BaseConfig;
        }],
        execute: function () {
            AureliaI18nConfigBuilder = (function () {
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
                        BaseConfig.setDefault();

                        var obj = this.extend(BaseConfig.current(), obj);

                        var httpC = new HttpClient();
                        try {
                            httpC.get(obj.path).then(function (response) {
                                console.log(response);
                                BaseConfig.setDef(JSON.parse(response.response));
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

            _export('AureliaI18nConfigBuilder', AureliaI18nConfigBuilder);
        }
    };
});