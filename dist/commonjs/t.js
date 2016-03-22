'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaHttpClient = require('aurelia-http-client');

var _utls = require('utls');

var _utls2 = _interopRequireDefault(_utls);

var __defs = {};
var __options = {
	path: 'translate',
	lang: 'en'
};

var TValueConverter = (function () {
	function TValueConverter() {
		_classCallCheck(this, TValueConverter);
	}

	_createClass(TValueConverter, [{
		key: 'toView',
		value: function toView(value, params) {
			params = params || {};
			var str = '';
			if (__defs.hasOwnProperty(value)) {
				str = __defs[value];
				Object.getOwnPropertyNames(params).map(function (key) {
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
	}], [{
		key: 'setPath',
		value: function setPath(path) {
			__options.path = path;
		}
	}, {
		key: 'setLang',
		value: function setLang(lang) {
			__options.lang = lang;
		}
	}, {
		key: 'load',
		value: function load(translations) {
			return new Promise(function (resolve, reject) {
				var httpClient = new _aureliaHttpClient.HttpClient();
				httpClient.get([].concat(__options.path, __options.lang, translations).join('/')).then(function (data) {
					__defs = _utls2['default'].extend(__defs, JSON.parse(data.response));
					resolve(TValueConverter);
				})['catch'](reject);
			});
		}
	}]);

	return TValueConverter;
})();

exports.TValueConverter = TValueConverter;