System.register(['aurelia-http-client', 'utls'], function (_export) {
	'use strict';

	var HttpClient, utls, __defs, __options, TValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}, function (_utls) {
			utls = _utls['default'];
		}],
		execute: function () {
			__defs = {};
			__options = {
				path: 'translate',
				lang: 'en'
			};

			TValueConverter = (function () {
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
							var httpClient = new HttpClient();
							httpClient.get([].concat(__options.path, __options.lang, translations).join('/')).then(function (data) {
								__defs = utls.extend(__defs, JSON.parse(data.response));
								resolve(TValueConverter);
							})['catch'](reject);
						});
					}
				}]);

				return TValueConverter;
			})();

			_export('TValueConverter', TValueConverter);
		}
	};
});