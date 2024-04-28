const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>home page</p>'); // write+end +setheader
  res.sendFile('./views/index.html', { root: __dirname }); // the seconde arg to show what is the root path 
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');// to redirect to this page
});

// 404 page
app.use((req, res) => { // we used use instead of get cause this function will not wait for the others it will use the functions inside of it  in every upcoming request
  res.status(404).sendFile('./views/404.html', { root: __dirname }); // stauts to send the astate
});
