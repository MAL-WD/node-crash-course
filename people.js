const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];

// console.log(people);

// module.exports = people; thiss will export the people array to the require function

module.exports = { // for multiple values
  people, //this is like people=people
  ages,
}