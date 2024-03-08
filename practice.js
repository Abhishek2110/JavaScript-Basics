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

// var
var a = 21;
var a = "Abhishek";
a = 24;
console.log(a)

// let
let b = 22;
// let b = 23; // We can't do this
b = 23;
console.log(b)

// const
const c = 25;
// c = 26; // We can't do this
console.log(c);

// Scoping

// We can redeclare or initialize same variable name in different block scopes
{
  var a = 24;
  console.log(a);
}

{
  let b = 23;
  console.log(b);
}

{
  const c = 25;
  console.log(c);
}