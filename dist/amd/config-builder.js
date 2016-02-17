define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var AureliaI18nConfigBuilder = (function () {
        function AureliaI18nConfigBuilder() {
            _classCallCheck(this, AureliaI18nConfigBuilder);

            this.resources = [];
            this.useGlobalResources = true;
        }

        _createClass(AureliaI18nConfigBuilder, [{
            key: 'setup',
            value: function setup(obj) {
                console.log(obj);
                this.core();
                return this;
            }
        }, {
            key: 'core',
            value: function core() {
                this.resources.push('i18n/i18n');
                return this;
            }
        }]);

        return AureliaI18nConfigBuilder;
    })();

    exports.AureliaI18nConfigBuilder = AureliaI18nConfigBuilder;
});