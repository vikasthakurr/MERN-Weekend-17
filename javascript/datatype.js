// 1. PRIMITIVE (stored in STACK memory - by value)
// 2. NON-PRIMITIVE (stored in HEAP memory - by reference)

// 1. STRING - Textual data
// Definition: Represents text, enclosed in quotes (single, double, or backticks)

let str1 = "Hello";
let str2 = "World";
let str3 = `Template Literal`;

console.log(typeof str1); // string

// String concatenation
let fullName = "John" + " " + "Doe";

// Template literals - embed expressions with ${}
let name = "Alice";
let age = 25;
let message = `My name is ${name} and I am ${age} years old`;

// Common string methods
let text = "  Hello World  ";
console.log(text.length); // 15
console.log(text.trim()); // "Hello World"
console.log(text.toLowerCase()); // "  hello world  "
console.log(text.toUpperCase()); // "  HELLO WORLD  "
console.log(text.includes("World")); // true
console.log(text.indexOf("World")); // 8
console.log(text.slice(2, 7)); // "Hello"
console.log(text.replace("World", "JavaScript")); // "  Hello JavaScript  "
console.log(text.split(" ")); // ["", "", "Hello", "World", "", ""]

// MEMORY: Strings are stored by VALUE (independent copies)
let string1 = "Hello";
let string2 = string1; // Copy by value
string2 = "World";
console.log(string1); // "Hello" (unchanged)
console.log(string2); // "World"

// ----------------------------------------------------------------------------

// 2. NUMBER - Numeric data (integers and decimals)
// Definition: Represents both integer and floating-point numbers

let integer = 42;
let decimal = 3.14159;
let negative = -100;
let exponential = 2.5e6; // 2500000

console.log(typeof integer); // number

// Special numeric values
let infinityValue = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN; // Not a Number

console.log(10 / 0); // Infinity
console.log("text" * 5); // NaN
console.log(typeof NaN); // number

// Number operations
let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1
let power = 2 ** 3; // 8

// Number methods
let num = 123.456789;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(5)); // "123.46"
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(Number.isInteger(123)); // true
console.log(Number.isNaN(NaN)); // true

// MEMORY: Numbers are stored by VALUE (independent copies)
let num1 = 100;
let num2 = num1; // Copy by value
num2 = 200;
console.log(num1); // 100 (unchanged)
console.log(num2); // 200

// ----------------------------------------------------------------------------

// 3. BOOLEAN - True or false
// Definition: Represents logical values, either true or false

let isActive = true;
let hasPermission = false;

console.log(typeof isActive); // boolean

// Boolean from comparisons
let isGreater = 10 > 5; // true
let isEqual = 5 === "5"; // false
let isLooseEqual = 5 == "5"; // true

// Logical operators
let and = true && false; // false
let or = true || false; // true
let not = !true; // false

// Truthy and Falsy values
// FALSY: false, 0, -0, 0n, "", null, undefined, NaN
// TRUTHY: Everything else

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean(1)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// MEMORY: Booleans are stored by VALUE (independent copies)
let bool1 = true;
let bool2 = bool1; // Copy by value
bool2 = false;
console.log(bool1); // true (unchanged)
console.log(bool2); // false

// ----------------------------------------------------------------------------

// 4. BIGINT - Large integers (ES2020)
// Definition: Represents integers larger than Number.MAX_SAFE_INTEGER

let bigNumber = 1234567890123456789012345678901234567890n; // Note the 'n' suffix
let anotherBig = BigInt("9007199254740991234567890");

console.log(typeof bigNumber); // bigint

// BigInt operations
let bigSum = 100n + 50n; // 150n
let bigProduct = 10n * 5n; // 50n
let bigPower = 2n ** 100n; // Very large number

// Cannot mix BigInt with regular numbers
// let mixed = 100n + 50; // Error
let mixedCorrect = 100n + BigInt(50); // 150n

// Use case: Numbers beyond Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
let beyondMax = 9007199254740991234567890n;

// MEMORY: BigInt is stored by VALUE (independent copies)
let big1 = 123456789n;
let big2 = big1; // Copy by value
big2 = 987654321n;
console.log(big1); // 123456789n (unchanged)
console.log(big2); // 987654321n

// ----------------------------------------------------------------------------

// 5. SYMBOL - Unique identifier (ES6)
// Definition: Creates a unique value that can be used as object property keys

let sym1 = Symbol("description");
let sym2 = Symbol("description");

console.log(typeof sym1); // symbol
console.log(sym1 === sym2); // false (each symbol is unique)

// Use case: Unique object property keys
let id = Symbol("id");
let user = {
  name: "John",
  [id]: 12345, // Symbol as property key
};

console.log(user[id]); // 12345
console.log(user.id); // undefined

// Symbols are not enumerable
for (let key in user) {
  console.log(key); // Only prints: name
}

// Global symbol registry
let globalSym1 = Symbol.for("app.id");
let globalSym2 = Symbol.for("app.id");
console.log(globalSym1 === globalSym2); // true (same symbol)

// MEMORY: Symbols are stored by VALUE (unique and immutable)

// ============================================================================
// NON-PRIMITIVE DATA TYPES (HEAP MEMORY)
// ============================================================================

// 6. OBJECT - Collection of key-value pairs
// Definition: Stores multiple values as properties (key-value pairs)

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  address: {
    city: "New York",
    country: "USA",
  },
};

console.log(typeof person); // object

// Accessing properties
console.log(person.firstName); // "John" (dot notation)
console.log(person["lastName"]); // "Doe" (bracket notation)

// Adding/Modifying properties
person.email = "john@example.com";
person.age = 31;

// Deleting properties
delete person.isEmployed;

// Object methods
console.log(Object.keys(person)); // Array of keys
console.log(Object.values(person)); // Array of values
console.log(Object.entries(person)); // Array of [key, value] pairs

// MEMORY: Objects are stored by REFERENCE (both variables point to same object)
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; // Copy by reference

obj2.age = 30;
console.log(obj1.age); // 30 (obj1 is affected!)
console.log(obj2.age); // 30

console.log(obj1 === obj2); // true (same reference)

// Creating independent copy (shallow copy)
let obj3 = { ...obj1 }; // Spread operator
let obj4 = Object.assign({}, obj1); // Object.assign

obj3.age = 35;
console.log(obj1.age); // 30 (unchanged)
console.log(obj3.age); // 35

// Deep copy for nested objects
let originalNested = { name: "John", address: { city: "NYC" } };
let deepCopy = JSON.parse(JSON.stringify(originalNested));

deepCopy.address.city = "LA";
console.log(originalNested.address.city); // "NYC" (unchanged)

// ----------------------------------------------------------------------------

// 7. ARRAY - Ordered collection of values
// Definition: Stores multiple values in a single variable with numeric indexes

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null, { key: "value" }];
let empty = [];

console.log(typeof numbers); // object
console.log(Array.isArray(numbers)); // true (proper way to check)

// Accessing elements (zero-indexed)
console.log(numbers[0]); // 1 (first element)
console.log(numbers[numbers.length - 1]); // 5 (last element)

// Array methods - MUTATING (modify original)
numbers.push(6); // Add to end
numbers.pop(); // Remove from end
numbers.unshift(0); // Add to beginning
numbers.shift(); // Remove from beginning
numbers.splice(2, 1); // Remove 1 element at index 2
numbers.reverse(); // Reverse array
numbers.sort(); // Sort array

// Array methods - NON-MUTATING (return new array)
let doubled = numbers.map((n) => n * 2);
let filtered = numbers.filter((n) => n > 2);
let sliced = numbers.slice(1, 3);
let concatenated = numbers.concat([6, 7]);

// Other useful methods
console.log(numbers.includes(4)); // true
console.log(numbers.indexOf(4)); // index position
console.log(numbers.find((n) => n > 3)); // first element > 3
console.log(numbers.reduce((sum, n) => sum + n, 0)); // sum all
console.log(numbers.join("-")); // "1-2-3-4-5"

// MEMORY: Arrays are stored by REFERENCE (both variables point to same array)
let arr1 = [1, 2, 3];
let arr2 = arr1; // Copy by reference

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (arr1 is affected!)
console.log(arr2); // [1, 2, 3, 4]

console.log(arr1 === arr2); // true (same reference)

// Creating independent copy
let arr3 = [...arr1]; // Spread operator
let arr4 = arr1.slice(); // slice method
let arr5 = Array.from(arr1); // Array.from

arr3.push(5);
console.log(arr1); // [1, 2, 3, 4] (unchanged)
console.log(arr3); // [1, 2, 3, 4, 5]

// ----------------------------------------------------------------------------

// 8. FUNCTION - Reusable block of code
// Definition: A block of code designed to perform a particular task

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(typeof greet); // function
console.log(greet("Alice")); // "Hello, Alice!"

// Function expression
let multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 3)); // 15

// Arrow function (ES6)
let add = (a, b) => a + b;
let square = (x) => x * x;
let sayHello = () => "Hello!";

console.log(add(10, 5)); // 15
console.log(square(4)); // 16
console.log(sayHello()); // "Hello!"

// Function with default parameters
function greetWithDefault(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greetWithDefault()); // "Hello, Guest!"
console.log(greetWithDefault("John")); // "Hello, John!"

// Function with rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Higher-order functions
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

let double = createMultiplier(2);
console.log(double(5)); // 10

// MEMORY: Functions are stored by REFERENCE
let func1 = function () {
  return "Hello";
};
let func2 = func1; // Copy by reference

console.log(func1 === func2); // true (same reference)

// Functions are objects and can have properties
func1.customProperty = "I am a property";
console.log(func2.customProperty); // "I am a property"

// Callback functions
let nums = [1, 2, 3, 4, 5];
let doubled2 = nums.map(function (n) {
  return n * 2;
});

// ============================================================================
// COMPARISON: PRIMITIVE vs NON-PRIMITIVE
// ============================================================================

// PRIMITIVE: Compared by VALUE
let prim1 = 10;
let prim2 = 10;
console.log(prim1 === prim2); // true (same value)

// NON-PRIMITIVE: Compared by REFERENCE
let obj1a = { name: "John" };
let obj2a = { name: "John" };
console.log(obj1a === obj2a); // false (different references)

let arr1a = [1, 2, 3];
let arr2a = [1, 2, 3];
console.log(arr1a === arr2a); // false (different references)

// Same reference
let obj3a = obj1a;
console.log(obj1a === obj3a); // true (same reference)

// ============================================================================
// TYPE CHECKING
// ============================================================================

console.log(typeof "hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof 123n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// Better array checking
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// instanceof operator
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(function () {} instanceof Function); // true
