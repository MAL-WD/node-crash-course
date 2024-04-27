const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (err, data) => { // this function is async first arg is the file path the second is a function that will fire when the file is uploaded
  if (err) {
    console.log(err); // if the file doesn't exist will show this err
  }  
  console.log(data.toString());// this will return a buffer and it's a just a package of data that it's been sent to us when we read this file // tostring wil return it from a buffer into a string
});

// console.log('last line');

// writing files
fs.writeFile('./docs/blog.txt', 'hello, world', () => { // this will replace the content of the file with the second argument
  console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {// if the file doesnt exist this function will create it
  console.log('file was written');
});

// directories
if (!fs.existsSync('./assets')) { // a sync method that will block the code it's gonna taka a short amount of time tp do though and it's gonna check if something exists
  fs.mkdir('./assets', err => {// this will create a directory
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) { 
  fs.unlink('./docs/deleteme.txt', err => {// to delete files
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}