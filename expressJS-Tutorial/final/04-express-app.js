const express = require('express');
const path = require('path');
const app = express();

//setup static and middleware
// static file => a file that the server doesnt have to change it 
//place the static files in a designated folder => common name is public and express will take care of it 
//Eg of static files : css files, javascript files , images 

app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'navbar-app/index.html'));
//  2 ways to serve static files 
//     adding to static assets (now i added index.html to the static assets and now i dont have to set up any sendFile option);
//     2nd way is SSR (Server side rendering) => we use some template engine
// });

app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found');
});



app.listen(3000, () => {
    console.log('Server listning on port 3000');
});