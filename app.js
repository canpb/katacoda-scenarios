var http = require('http');
var port = '3000'
var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World from Can Paul to you!', port);
}

var server = http.createServer(requestListener);
server.listen(port, function() { console.log("Listening on port ", port)});
