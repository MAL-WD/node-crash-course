const express = require('express');
const morgan = require('morgan');
// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// <!-- middleware it what runs of code and functions on the server between a request and a respond -->
// the server protect our files auto so we can't link external css file on html from users in the browser so we can't accesss files whateever we want to
// to allow files to be accesed to we should specify it in other words what files should be public
// to do that we use static middlware
// middleware & static files

app.use(express.static('public')); //any thing inside the folder "public  to accessable"
// 
app.use((req, res, next) => { // if u do not add next func the browser will hang  bcz express  doesn't know auto how to move on
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();// this tell that we finished inside this middleware now move on to the next
});

app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
