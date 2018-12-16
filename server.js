const http = require('http');

const server = http.createServer();

const cron = require('node-cron');

const result= cron.schedule('*/2 * * * * *', () => {
    console.log(Math.floor(Date.now() / 1000));
});

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('All OK');
});

server.listen(8000, () => console.log('Running' + result));