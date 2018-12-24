const http = require('http');

const server = http.createServer();

const axios = require('axios');

const cron = require('node-cron');

const result= cron.schedule('*/10 * * * * *', () => {
    return(
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Dnipro,ua&units=metric&APPID=38fc1678aa4a045c04c1393432877266')
            .then(function (response) {
                console.log(response.data.main);
            })
            .catch(function (error) {
                console.log(error);
            })
    );
});

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('All OK');
});

server.listen(8000, () => console.log('Running' + result));