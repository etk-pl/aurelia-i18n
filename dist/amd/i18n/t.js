define(['exports', 'aurelia-framework', './base-config'], function (exports, _aureliaFramework, _baseConfig) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TValueConverter = (function () {
		function TValueConverter() {
			_classCallCheck(this, TValueConverter);
		}

		_createClass(TValueConverter, [{
			key: 'toView',
			value: function toView(value, params) {
				var def = _baseConfig.BaseConfig.getDef() || {};
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

	exports.TValueConverter = TValueConverter;
});