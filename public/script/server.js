const http = require('http');
const fs = require('fs');
const { json } = require('node:stream/consumers');

const server = http.createServer((req, res) => {

    if (req.url === '/all') {
        fs.readFile(`${__dirname}/JSONDATA/all.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    } else if (req.url === '/watch') {
        fs.readFile(`${__dirname}/JSONDATA/watch.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    } else if (req.url === '/men') {
        fs.readFile(`${__dirname}/JSONDATA/men.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    } else if (req.url === '/women') {
        fs.readFile(`${__dirname}/JSONDATA/women.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    } else if (req.url === '/homestop') {
        fs.readFile(`${__dirname}/JSONDATA/Homestop.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    } else if (req.url === '/beauty') {
        fs.readFile(`${__dirname}/JSONDATA/beauty.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    }else if (req.url === '/kid') {
        fs.readFile(`${__dirname}/JSONDATA/kid.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    } else {
        res.writeHead(404, { "Context-type": "text/html" });
        res.end("<h1>Invalid page</h1>");
    }
});

server.listen(8080, "127.0.0.1", () => {
    console.log(`Started`);
});


// http://localhost:8080

// node server.js
// run this command


// http://localhost:8080/all - all products
// http://localhost:8080/men - men products
// http://localhost:8080/women - women products
// http://localhost:8080/watch - watch products