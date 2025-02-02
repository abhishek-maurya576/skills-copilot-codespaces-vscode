// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const comments = require('./comments.json');
const port = 3000;
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    if (pathName === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        });
    } else if (pathName === '/comments') {
        if (req.method === 'GET') {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(comments));
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                const comment = JSON.parse(body);
                comments.push(comment);
                fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments, null, 4), (err) => {
                    if (err) throw err;
                    res.writeHead(201, {
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify(comments));
                });
            });
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>404 Not Found</h1>');
    }
});
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// End of comments.js