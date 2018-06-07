/*

name: iiko-card5
documentation: https://docs.google.com/document/d/1kuhs94UV_0oUkI2CI3uOsNo_dydmh9Q0MFoDWmhzwxc/edit#
author: pub42 (xziy, ...)

*/
var config



const request = require('iiko-request');
    
    
var methods = {
getCustomerByPhone: {
		type: 'GET',
		path: '/api/0/customers/get_customer_by_phone',
		params: {
			organization: "string",
			phone: "phone-ru"	
		}
	},
any: {} 
};    
    
////////////////////////////////////////////////////////////////////////////////
exports.init = function(_config) {
	config = _config;
	request.init(config);
};

exports.api = function(method, data) {
	return new Promise(function(resolve, reject) {

		// TODO: vlidation data for separate methods 
		
		if (methods[method].params.hasOwnProperty('organization')) {
			data.organization = config.organization;
		}
		
		request.call(methods[method], data).then(
		  result => {
		      console.log(result)
					resolve(result);
		  },
		  error => {
		      reject(error);
		  }
		)
  });
};
