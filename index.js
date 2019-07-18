var dataaccess= require('./DataAccess');
var currentPost = 1;

function fetchData(){
	dataaccess.getPost(currentPost);
	currentPost++;
}

setInterval(fetchData.bind(this), 3000);