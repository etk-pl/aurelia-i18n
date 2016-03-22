import {HttpClient} from 'aurelia-http-client';
var __defs = {};
var __options = {
	path : 'translate',
	lang : 'en'
};
export class TValueConverter {
	static setPath(path) {
		__options.path = path;
	}

	static setLang(lang) {
		__options.lang = lang;
	}

	static load(translations) {
		return new Promise((resolve, reject) => {
			var httpClient = new HttpClient();
			httpClient.get([].concat(__options.path, __options.lang, translations).join('/')).then((data) => {
				__defs = Object.assign(__defs, JSON.parse(data.response));
				resolve(TValueConverter);
			}).catch(reject);
		});
	}

	toView(value, params) {
		params = params || {};
		var str = '';
		if (__defs.hasOwnProperty(value)) {
			str = __defs[value];
			Object.getOwnPropertyNames(params).map((key)=> {
				str = str.replace("__" + key + "__", params[key]);
			});
		} else {
			str = "!!" + value + "!!";
		}
		return str;
	}

	fromView(value, param) {
		//console.log('from View' + param)
		//return JSON.parse(def.value);
	}
}
