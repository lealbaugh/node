function route(handle, pathname, response, postData) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
  	handle[pathname](response, postData);
  }
  else {
  	console.log("Nope; "+pathname);
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("D:");
	response.end();
  }
}

exports.route = route;