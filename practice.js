// import { display } from './lib.js';

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

// Blocking and Non-Blocking in JS

// Blocking code example
function blockingOperation() {
  for (let i = 0; i < 1000000000; i++) {
      // console.log(i)
  }
  console.log("Blocking operation completed");
}

console.log("Before blocking operation");
blockingOperation();
console.log("After blocking operation");

// Non-blocking code example
function nonBlockingOperation() {
  setTimeout(() => {
      console.log("Non-blocking operation completed");
  }, 2000);
}

console.log("Before non-blocking operation");
nonBlockingOperation();
console.log("After non-blocking operation");

// Callbacks

function isOdd(number) {
  return number % 2 != 0;
}

function filter(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];

console.log(filter(numbers, isOdd));

// ES6 
// display('Heelllooo');

// Array Methods

let arr = [1, 21, 11, 31, 41, 51];
arr.push(71); // Push Method
arr.pop();   // Pop Method
console.log(arr);

// String Methods

let str = "        Hello! When are you reaching?       ";
let result = str.trim();   // Trim Method
console.log(result);

const str1 = 'Hello';
const substr = str1.slice(3);  // Slice Method
console.log({ substr });

