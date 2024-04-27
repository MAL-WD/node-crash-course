const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);

  // set header content type is for tell what the type of the response will be text json..
  res.setHeader('Content-Type', 'text/html');

  // res.write('<p>hello, ninjas</p>'); to write the response
  // res.write('<p>hello again, ninjas</p>');
  // res.end(); wo end the response

  // send html file
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   //res.write(data);
  //   res.end(data);
  // });

  // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;// to set the state
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
      case '/about-us':
        res.statusCode = 301;
        res.setHeader('Location', '/about');// ti reCdirect
      res.end();
      break;
      default:
      path += '404.html';
      res.statusCode = 404;
    }
    
    //state codes describe the type of response sent to the browser
    // 200 ok
    // 301 resource removed
    // not found
    // 500 internal server 
    
    // ranges
    // 100 range informational res
    // 200 range success code
    // 300 range codes for redirect
    // 400 range use or client  error codes 
    // 500 range server error codes

    // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
