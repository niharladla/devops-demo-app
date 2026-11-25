
const http = require('http');

const appEnv = process.env.APP_ENV || 'development';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end(`Hello! My first DevOps application is running.
Environment: ${appEnv}`);
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running in ${appEnv} environment`);
});
