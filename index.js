var http = require("http");
var server = http.createServer((req, res) => { res.end("lol nothing here what are you looking at"); });
server.listen(8080, function(){});