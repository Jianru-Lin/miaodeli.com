var express = require('express');
var path = require('path');

main();

function main() {
	var app = express();
	app.use(express.static('public'));
	app.engine('jade', require('jade').__express);
	app.get('/', index_page);
	app.listen(80);	
}

function resolve(subpath) {
	return path.resolve(__dirname, subpath);
}

function index_page(req, res) {
	debugger;
	var file = resolve('view/index.jade');
	res.render(file, {});
}
