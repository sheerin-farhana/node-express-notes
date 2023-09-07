const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');
// req = middleware = response

//1. use vs route
//2. options - our own / express / third party

// app.use([logger,authorize]); //our own middleware
// app.use(express.static('./public')); // express middleware
// app.use(morgan('tiny')); // third party middleware installed using npm

app.get('/' ,(req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('about');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items');
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});