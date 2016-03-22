import {customElement,inject} from 'aurelia-framework';
import {BaseConfig} from './base-config';

export class TValueConverter {
	toView(value,params) {
		var def = BaseConfig.getDef() || {};
		var str='';
		if(def.hasOwnProperty(value)){
			str = def[value];
			Object.getOwnPropertyNames(params||{}).map((key)=>
			{
				str=str.replace("__" + key + "__", params[key]);
			});
		}
		else {
			str = "!!"+value+"!!";
		}
		return str;
	}

	fromView(value,param)
	{
		//console.log('from View' + param)
		//return JSON.parse(def.value);
	}
}