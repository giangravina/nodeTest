var moment = require('moment');

var ts = {
	getTime: function(){
		return moment().format("h:mm:ss a");
	}
};

module.exports= ts;