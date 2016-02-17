System.register(["aurelia-framework"], function (_export) {
	"use strict";

	var customElement, inject, I18n;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			I18n = (function () {
				function I18n() {
					_classCallCheck(this, I18n);

					console.log("I18n");
				}

				_createClass(I18n, [{
					key: "get",
					value: function get() {
						console.log("i18n");
					}
				}]);

				return I18n;
			})();

			_export("I18n", I18n);
		}
	};
});