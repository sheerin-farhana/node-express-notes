const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

app.all('*', (req, res) => {
    res.status(400).send('<h1>Resource Not Found</h1>');
});



app.listen(3000, () => {
    console.log('server listning on port 3000');
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen