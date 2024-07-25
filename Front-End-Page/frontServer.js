const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
};

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'frontpage.html' : req.url);
    let extname = String(path.extname(filePath)).toLowerCase();
    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
