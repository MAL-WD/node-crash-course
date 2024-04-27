//streams:start using date before it has finished loading
// buffer is chunks of data that are packaged up

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'}); // this create a read steam 1st arg:where we want to read the datea from
const writeStream = fs.createWriteStream('./docs/blog4.txt'); // oposite

readStream.on('data', chunk => { // on is a data event everyt ime we recieve a buffer of data from this stream
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk); u can add to string to alter the buffer package data to string
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk); // to pass data
});

// piping // this will do both writrin and reading at the same time
// readStream.pipe(writeStream);
