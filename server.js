// following the excellent instructions at
// http://www.nodebeginner.org/

var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("loading this page: "+pathname);

		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("received chunk")
		})

		request.addListener("end", function(){
			route(handle, pathname, response, postData);
		})

	}

	var port = process.env.PORT || 3000;
	// for compatibility with Heroku, as seen on
	// http://niel.delarouviere.com/2012/03/the-really-absolute-beginners-guide-to-host-node-js-on-heroku/
	http.createServer(onRequest).listen(port);

	console.log("go server go");
}

exports.start = start;