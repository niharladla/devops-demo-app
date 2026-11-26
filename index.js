const http = require('http');

const appEnv = process.env.APP_ENV || 'development';

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end(
        `Hello! My DevOps CI/CD pipeline is working!\n` +
        `Version: 3\n` +
        `Environment: ${appEnv}`
    );
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});