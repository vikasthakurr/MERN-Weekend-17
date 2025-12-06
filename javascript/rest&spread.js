// REST PARAMETER (...)
// ----------------------------------------------------------------------------
// Definition: Collects multiple arguments into an array
// Must be the last parameter in function

// Example 1 - basic rest parameter
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Example 2 - rest with other parameters
function greet(greeting, ...names) {
  return greeting + " " + names.join(", ");
}

console.log(greet("Hello", "John", "Jane", "Bob")); // "Hello John, Jane, Bob"

// ----------------------------------------------------------------------------
// SPREAD OPERATOR WITH ARRAYS (...)
// ----------------------------------------------------------------------------
// Definition: Expands an array into individual elements

// Example 1 - spreading in function call
let numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5

// Example 2 - copying and merging arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// ----------------------------------------------------------------------------
// SPREAD OPERATOR WITH OBJECTS (...)
// ----------------------------------------------------------------------------
// Definition: Copies properties from one object to another

// Example 1 - copying object
let person = { name: "John", age: 30 };
let personCopy = { ...person };
console.log(personCopy); // { name: "John", age: 30 }

// Example 2 - merging objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// ----------------------------------------------------------------------------
// REST vs SPREAD
// ----------------------------------------------------------------------------

// REST: Collects arguments into array (in function parameters)
function restExample(...args) {
  console.log(args); // [1, 2, 3]
}
restExample(1, 2, 3);

// SPREAD: Expands array into individual elements (in function calls, arrays)
let spreadExample = [1, 2, 3];
console.log(...spreadExample); // 1 2 3
