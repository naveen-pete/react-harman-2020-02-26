// function statement syntax - ES5
// function sum(a, b) {
//   return a + b;
// }

// function expression syntax - ES5
// var sum = function (a, b) {
//   return a + b;
// };

// arrow function syntax - ES6
// var sum = (a, b) => {
//   return a + b;
// };

// arrow function syntax - ES6
var sum = (a, b) => a + b;

var square = n => n * n;

var sayHi = _ => console.log('hi');

var result = sum(10, 20);
console.log('result:', result);

console.log('square:', square(10));

sayHi();
