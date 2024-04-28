const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);
// view engine that will let us make dynamic website not standard
// register view engine
// ejs embedded  js templating
app.set('view engine', 'ejs');//thie will make us use ejs as our view engine
// app.set('views', 'myviews');express and ejs will auto look at the views folder  this will change the configuration file of ejs

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs }); // the second arg is an object that will be passed to the index file
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' }); // render the file and send it back to the browser will render ejs files
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
