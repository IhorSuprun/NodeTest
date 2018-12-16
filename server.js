const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('All OK');
});

server.listen(8000, () => console.log('Running'));