const http = require('http');//http module

const server = http.createServer((req, res) => {//thic funtion create the server / the req object vome with a lof info about the request/ the res object we use it to accually send a response to the user in the browser nut to do that we need an ivoke method
  console.log('request made');// this call back funtion wil run every thime the request come in // this code is run onn the server
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => { //1st arg is for the port the 2nd is for
  console.log('listening for requests on port 3000');//when listen to request
});
//local host is like a domain but this one is a very specific ip adress called a loopback ip adress now this ip adress is  127.0.0.1 an i tpoint directly to ur computer
// port number is a channel gateway or port on our computer that a certain bit of software our server should communicate through 3000 is the commun one  in web dev
// u have to node the file so the server start and u have to rerun verytime u change the code