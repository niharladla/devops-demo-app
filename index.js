const http = require('http');

const server = http.createServer((req, res) => {

    console.log(`Request received: ${req.method} ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello! My DevOps CI/CD pipeline is working!\nVersion: 2\nEnvironment: production');

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});