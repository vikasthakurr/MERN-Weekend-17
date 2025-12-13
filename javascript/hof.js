// DEFINITION:
// Higher Order Function (HOF) is a function that either:
// 1. Takes one or more functions as arguments (parameters), OR
// 2. Returns a function as its result
// Syntax: fun1(fun2) - where fun1 is HOF and fun2 is the callback function

// JavaScript arrays have several built-in HOFs like map, filter, reduce
// These methods take a callback function as an argument

// let arr = [1, 2, 3, 4, 5];

// MAP - Transforms each element and returns a new array
// Takes a callback function that is executed for each element
// arr.map((ele) => {
//   console.log(ele * 2);  // Output: 2, 4, 6, 8, 10
// });

// FILTER - Returns a new array with elements that pass the test
// Takes a callback function that returns true/false
// console.log(arr.filter((ele) => ele % 2 === 0));  // Output: [2, 4]
// console.log(arr);  // Original array remains unchanged: [1, 2, 3, 4, 5]

// REDUCE - Reduces array to a single value
// Takes a callback with accumulator and current element
// console.log(arr.reduce((acc, ele) => ele + acc));  // Output: 15 (sum of all elements)

// Example: Tax calculation system
let salary = [1000, 2000, 3000, 4000, 5000];

// These are CALLBACK FUNCTIONS that will be passed to our HOF
// Each function calculates a different tax percentage
function tenPercent(salary) {
  return salary * 0.1; // 10% tax
}

function twentyPercent(salary) {
  return salary * 0.2; // 20% tax
}

function fiftyPercent(salary) {
  return salary * 0.5; // 50% tax
}

// We're adding a custom method to ALL arrays using Array.prototype
// This makes CalculateTax available on any array, just like map, filter, etc.

// 'this' keyword here refers to the array that calls this method
Array.prototype.CalculateTax = function (cb) {
  // cb (callback) is the function passed as an argument
  let res = []; // Array to store results

  // Loop through the array (this refers to the calling array)
  for (let i = 0; i < this.length; i++) {
    // Execute the callback function on each element
    // cb(this[i]) calls the passed function with current salary value
    res.push(cb(this[i]));
  }
  return res; // Return new array with calculated values
};

// HOW TO USE OUR CUSTOM HOF:
// console.log(salary.CalculateTax(tenPercent));
// Output: [100, 200, 300, 400, 500] - 10% of each salary

// console.log(salary.CalculateTax(twentyPercent));
// Output: [200, 400, 600, 800, 1000] - 20% of each salary

// Creating another array to demonstrate
// let arr = [4000, 50000, 60000];

// We can use our custom HOF on any array
// arr.CalculateTax(fiftyPercent);
// Output: [2000, 25000, 30000] - 50% of each value

// Note: Built-in map does the same thing
// arr.map(() => fiftyPercent);

// The 'this' keyword behaves differently in different contexts:

// 1. GLOBAL CONTEXT
// console.log(this);  // In browser: window object, In Node.js: global object

// 2. REGULAR FUNCTION
// ("use strict");  // Strict mode changes 'this' behavior
// function a() {
//   let b = 10;
//   console.log(b);  // 10
//   console.log(this);  // undefined in strict mode, global object otherwise
// }
// this.a();

// 3. ARROW FUNCTION
// Arrow functions don't have their own 'this'
// They inherit 'this' from the parent scope (lexical scoping)
// const b = () => {
//   let c = 30;
//   console.log(this);  // Inherits 'this' from outer scope
// };
// b();

// 4. OBJECT METHOD
// When a function is called as a method of an object,
// 'this' refers to the object itself
// let obj = {
//   b: 30,
//   print: function () {
//     console.log(this.b);  // 'this' refers to obj, so output: 30
//   },
// };
// obj.print();  // Output: 30

// KEY TAKEAWAYS:
// 1. HOF takes functions as arguments or returns functions
// 2. map, filter, reduce are built-in HOFs
// 3. You can create custom HOFs for reusable logic
// 4. Array.prototype allows adding methods to all arrays
// 5. 'this' keyword refers to different contexts based on how function is called
