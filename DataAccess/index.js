var rp = require('request-promise');
var timestamp = require('../TimeStamp');

var da = {
	getPost: function(postId){
		var options = {
	uri: 'http://jsonplaceholder.typicode.com/posts/' + postId,
	json: true
};

	rp(options)
		.then(function(post){
			console.log(post);
			console.log(timestamp.getTime());
	})
	.catch(function(e){
		console.log(e);
	})

	}
};

module.exports = da;