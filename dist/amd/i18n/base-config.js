define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var BaseConfig = (function () {
        function BaseConfig() {
            _classCallCheck(this, BaseConfig);
        }

        _createClass(BaseConfig, null, [{
            key: 'current',
            value: function current() {
                return BaseConfig._current;
            }
        }, {
            key: 'setDefault',
            value: function setDefault() {
                BaseConfig._current = {
                    path: 'translate/en/interface.json',
                    dev: false
                };
            }
        }, {
            key: 'setConfig',
            value: function setConfig(obj) {
                BaseConfig._current = obj;
            }
        }, {
            key: 'setDef',
            value: function setDef(obj) {
                BaseConfig._def = obj;
            }
        }, {
            key: 'getDef',
            value: function getDef(obj) {
                return BaseConfig._def;
            }
        }]);

        return BaseConfig;
    })();

    exports.BaseConfig = BaseConfig;
});