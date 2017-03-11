var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'GET';

http.open(method, url);
http.onreadystatechnge = function() {
	if (http.readyState === XMLHttpRequest.DONE && http.status = = 200) {
	console.log(JSON.parse(http.responseText)[0].id);
	} else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
	console.log('Error!!');
	}
};
http.send();