const http = require('http');
const fs = require('fs');
const { json } = require('node:stream/consumers');

const server = http.createServer((req, res) => {

    if (req.url === '/watch') {
        fs.readFile(`${__dirname}/JSONDATA/watch.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    } else if (req.url === '/men') {
        fs.readFile(`${__dirname}/JSONDATA/men.json`, 'UTF-8', (err, data) => {
            res.end(data);
        })
    } 
    else {
        res.writeHead(404, { "Context-type": "text/html" });
        res.end("<h1>Invalid page</h1>");
    }
});

server.listen(8080, "127.0.0.1", () => {
    console.log(`Started`);
});


// http://localhost:8080/men
