// const people = require('./people'); module this will compile this file and will not give u access any data or properties //and this will return an empty object for the xsy

// console.log(people); // aso this will show u " nod defined"

// const data = require('./people'); 

// console.log(data.people, data.ages); // we can solve this by using destructing

const { people, ages } = require('./people'); //destruction

console.log(people, ages);

const os = require('os'); // this is build on node and this is an object thathas a lot of informations of the current operatin running system

console.log(os.platform(), os.homedir());//some functions on that object




