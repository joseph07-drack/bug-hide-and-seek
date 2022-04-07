// hoisting
let x = 3;
let y = 5;

let result = add(x, y);
console.log(result);

const add = function (x, y) {
  return `The sum gives : ${x + y}`;
};

// variable scope in javascript
for (var i of [1, 40, 3]) {
  // display each array's value after 1 second
  setInterval(function () {
    console.log(i);
  }, 1000);
}

// string concatenation
let year = 1960;
let independanceYear = 'The DRC got its independance in ' + year;
console.log(independanceYear);

// DOM manipulation
document.querySelector('p').color = 'green';
