// SHALLOW COPY
// ----------------------------------------------------------------------------
// Definition: Copies only the first level of an object/array
// Nested objects/arrays are still referenced (not copied)

// Example 1 - shallow copy with spread operator
let original = {
  name: "John",
  age: 30,
  address: { city: "NYC" },
};

let shallowCopy = { ...original };
shallowCopy.age = 35; // Modifying primitive value
shallowCopy.address.city = "LA"; // Modifying nested object

console.log(original.age); // 30 (unchanged - primitive copied)
console.log(original.address.city); // "LA" (changed - nested object referenced)

// Example 2 - shallow copy with Object.assign()
let person = {
  name: "Alice",
  details: { age: 25, city: "Boston" },
};

let copy = Object.assign({}, person);
copy.details.age = 30;

console.log(person.details.age); // 30 (affected!)

// Example 3 - shallow copy array
let arr1 = [1, 2, [3, 4]];
let arr2 = [...arr1];
arr2[2][0] = 99;

console.log(arr1[2][0]); // 99 (nested array affected!)

// ----------------------------------------------------------------------------
// DEEP COPY
// ----------------------------------------------------------------------------
// Definition: Copies all levels of an object/array
// Creates completely independent copy including nested objects/arrays

// Example 1 - deep copy with JSON.parse(JSON.stringify())
let original2 = {
  name: "Bob",
  age: 28,
  address: { city: "Chicago", zip: "60601" },
};

let deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.address.city = "Miami";

console.log(original2.address.city); // "Chicago" (unchanged)
console.log(deepCopy.address.city); // "Miami"

// Example 2 - deep copy array
let arr3 = [1, 2, [3, 4, [5, 6]]];
let arr4 = JSON.parse(JSON.stringify(arr3));
arr4[2][2][0] = 99;

console.log(arr3[2][2][0]); // 5 (unchanged)
console.log(arr4[2][2][0]); // 99

// Limitation: JSON method doesn't work with functions, undefined, Date, etc.
let objWithFunction = {
  name: "Test",
  greet: function () {
    return "Hello";
  },
  date: new Date(),
  value: undefined,
};

let copied = JSON.parse(JSON.stringify(objWithFunction));
console.log(copied);
// { name: "Test" } - function, date, and undefined are lost!

// ----------------------------------------------------------------------------
// COMPARISON
// ----------------------------------------------------------------------------

// Shallow Copy: Fast, but nested objects share references
let shallow = { ...original };

// Deep Copy: Slower, but completely independent
let deep = JSON.parse(JSON.stringify(original));
