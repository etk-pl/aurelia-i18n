System.register(["aurelia-framework"], function (_export) {
	"use strict";

	var customElement, I18n;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
		}],
		execute: function () {
			I18n = function I18n() {
				_classCallCheck(this, I18n);

				console.log("I18n");
			};

			_export("I18n", I18n);
		}
	};
});