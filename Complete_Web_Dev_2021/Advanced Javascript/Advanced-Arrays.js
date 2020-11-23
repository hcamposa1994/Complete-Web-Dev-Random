// Advanced Arrays

var array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

// Map, Filter, Reduce

const arrayMap = array.map((num) => num * 2);

// filter

const filterArray = array.filter((num) => num === 5);

console.log(filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5);

console.log(`reduce`, reduceArray);
