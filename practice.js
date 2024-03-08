// Functions in JS

// Normal Function
function sum(a, b){
    return a + b;
}
console.log(sum(15, 21))

// Arrow Function
const multiply = (c, d) => c * d;
console.log(multiply(5, 7))

// Anonymous Function
const divide = function (x, y) {
    return x / y;
  };
console.log(divide(21, 7))

// Variables in JS

// var (global scoped)
var a = 21;
var a = "Abhishek";
a = 24;
console.log(a)

// let (block scoped)
let b = 22;
// let b = 23; // We can't do this
b = 23;
console.log(b)

// const  (block scoped)
const c = 25;
// c = 26; // We can't do this
console.log(c);

// Scoping

// We can redeclare or initialize same variable name in different block scopes
// global scope
var h = "hello";
let g = "Welcome";
const j = "Bye";
// block scope
if (true) {
  var h = "hi";
  let g = "How are you?";
  const j = "See you";
  console.log(h)
  console.log(g)
  console.log(j)
}
console.log(h)
console.log(g)
console.log(j)

// Hoisting

// Hoisting using var keyword
console.log(counter);
var counter = 1;

// not possible in let
// console.log(count);
// let count = 1;

// not possible in const
// console.log(age);
// const age = 1;

