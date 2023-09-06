const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1> Home Page <a href = "/api/products">Products</a> </h1>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;  

    const singleProduct = products.find((product => product.id === Number(productID)));
    if (!singleProduct) {
        return res.status(404).send('<h1>Product Does Not Exist</h1>');
    };
    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world'); 
});


app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];


    if (search) {
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search));
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search')
        // always return the response , when you have two response for one request it will show cannot set headers after they are sent to the client error so its always a good practice to return the response
        return res.status(200).json({ success: true ,data:[]});
    }
    return res.status(200).json(sortedProducts);
});


app.listen(3000, () => {
    console.log("server listning on port 3000");
});