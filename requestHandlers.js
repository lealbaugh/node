var querystring = require("querystring")

function start(response) { 
	console.log("Request handler 'start' was called.");
	var body = '<html>'+ 
			'<head>'+ 
			'<meta http-equiv="Content-Type" content="text/html; '+ 
			'charset=UTF-8" />'+ 
			'</head>'+ 
			'<body>'+ 
			'<form action="/upload" method="post">'+ 
			'<label>Name:</label><input type="text" name="name">'+ 
			'<label>Color:</label><input type="color" name="color">'+ 
			'<input type="submit" value="Submit text" />'+ 
			'</form>'+ 
			'</body>'+ 
			'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}
function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<p style=\"font-size:5em; color:"+querystring.parse(postData).color+"\">"+
					querystring.parse(postData).name+"!</p>");
	response.end();
} 

exports.start = start;
exports.upload = upload;