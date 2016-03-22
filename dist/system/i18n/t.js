System.register(['aurelia-framework', './base-config'], function (_export) {
	'use strict';

	var customElement, inject, BaseConfig, TValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
			inject = _aureliaFramework.inject;
		}, function (_baseConfig) {
			BaseConfig = _baseConfig.BaseConfig;
		}],
		execute: function () {
			TValueConverter = (function () {
				function TValueConverter() {
					_classCallCheck(this, TValueConverter);
				}

				_createClass(TValueConverter, [{
					key: 'toView',
					value: function toView(value, params) {
						var def = BaseConfig.getDef() || {};
						var str = '';
						if (def.hasOwnProperty(value)) {
							str = def[value];
							Object.getOwnPropertyNames(params || {}).map(function (key) {
								str = str.replace("__" + key + "__", params[key]);
							});
						} else {
							str = "!!" + value + "!!";
						}
						return str;
					}
				}, {
					key: 'fromView',
					value: function fromView(value, param) {}
				}]);

				return TValueConverter;
			})();

			_export('TValueConverter', TValueConverter);
		}
	};
});