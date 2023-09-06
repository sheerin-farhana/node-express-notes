// HTTP Module

const http = require('http');
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.end('Welcome to my server');
    }
    else if (url === '/about') {
        res.end("This is the about page");
    }
    else {
        res.end(`<h1> OOPS!! </h1> 
    <p> Cant seem to find thepage you are looking for </p>
    <a href="/">back to home page </a>`);
    }

});

server.listen(3000);