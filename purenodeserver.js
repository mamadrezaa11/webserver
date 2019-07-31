const http = require('http');

function handler(req, res){
    res.writehead(200, {'content-type':'text/plain'});
    res.write('hello, I a, a webserver!');
    res.end();
}
const server = http.createServer{handler};

server.Listen(3000);
