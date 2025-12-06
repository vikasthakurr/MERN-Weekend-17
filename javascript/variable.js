// ============================================================================
// 1. WHAT IS A VARIABLE?
// ============================================================================
// A variable is a container that stores data values.
// Think of it as a labeled box where you can store information.

// ============================================================================
// 2. VARIABLE DECLARATION KEYWORDS
// ============================================================================

// ----------------------------------------------------------------------------
// 2.1 VAR (Old way - ES5 and before)
// ----------------------------------------------------------------------------
// - Function-scoped or globally-scoped
// - Can be re-declared and updated
// - Hoisted to the top (initialized with undefined)
// - NOT recommended in modern JavaScript

var oldWay = "I am using var";
console.log(oldWay); // Output: I am using var

var oldWay = "I can be re-declared"; // No error
console.log(oldWay); // Output: I can be re-declared

oldWay = "I can be updated too";
console.log(oldWay); // Output: I can be updated too

// Example of var hoisting
console.log(hoistedVar); // Output: undefined (not an error!)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted

// ----------------------------------------------------------------------------
// 2.2 LET (Modern way - ES6/ES2015)
// ----------------------------------------------------------------------------
// - Block-scoped (limited to the block {} where it's defined)
// - Can be updated but NOT re-declared in the same scope
// - Hoisted but not initialized (Temporal Dead Zone)
// - RECOMMENDED for variables that will change

let modernWay = "I am using let";
console.log(modernWay); // Output: I am using let

modernWay = "I can be updated";
console.log(modernWay); // Output: I can be updated

// let modernWay = "I cannot be re-declared"; // Error: Identifier 'modernWay' has already been declared

// Block scope example
{
  let blockScoped = "I exist only in this block";
  console.log(blockScoped); // Output: I exist only in this block
}
// console.log(blockScoped); // Error: blockScoped is not defined

// ----------------------------------------------------------------------------
// 2.3 CONST (Modern way - ES6/ES2015)
// ----------------------------------------------------------------------------
// - Block-scoped
// - CANNOT be updated or re-declared
// - Must be initialized at declaration
// - RECOMMENDED for values that should not change
// - Note: For objects and arrays, the reference cannot change, but contents can

const constantValue = "I cannot be changed";
console.log(constantValue); // Output: I cannot be changed

// constantValue = "Trying to change"; // Error: Assignment to constant variable

// const mustInitialize; // Error: Missing initializer in const declaration

// IMPORTANT: const with objects and arrays
const person = {
  name: "John",
  age: 25,
};

person.age = 26; // This is ALLOWED - we're modifying the object, not reassigning
console.log(person.age); // Output: 26

// person = { name: "Jane" }; // Error: Assignment to constant variable

const numbers = [1, 2, 3];
numbers.push(4); // This is ALLOWED - we're modifying the array, not reassigning
console.log(numbers); // Output: [1, 2, 3, 4]

// numbers = [5, 6, 7]; // Error: Assignment to constant variable

// ============================================================================
// 3. VARIABLE NAMING CONVENTIONS
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 CAMEL CASE (Most common for variables and functions)
// ----------------------------------------------------------------------------
// First word lowercase, subsequent words capitalized
let firstName = "John";
let lastName = "Doe";
let myAge = 25;
let isStudentActive = true;
let calculateTotalPrice = function () {
  return 100;
};

// ----------------------------------------------------------------------------
// 3.2 PASCAL CASE (Used for Classes and Constructors)
// ----------------------------------------------------------------------------
// Every word starts with a capital letter
class StudentRecord {}
function UserProfile() {}
const MyComponent = () => {};

// ----------------------------------------------------------------------------
// 3.3 SNAKE CASE (Less common in JavaScript, more in Python)
// ----------------------------------------------------------------------------
// Words separated by underscores, all lowercase
let first_name = "John";
let user_age = 25;
let is_active = true;

// ----------------------------------------------------------------------------
// 3.4 SCREAMING SNAKE CASE (For constants that never change)
// ----------------------------------------------------------------------------
// All uppercase with underscores
const MAX_SIZE = 100;
const API_KEY = "abc123xyz";
const DATABASE_URL = "mongodb://localhost:27017";
const PI = 3.14159;

// ----------------------------------------------------------------------------
// 3.5 KEBAB CASE (NOT valid for JavaScript variables!)
// ----------------------------------------------------------------------------
// Words separated by hyphens - CANNOT be used for variable names
// let first-name = "John"; // Error: Unexpected token '-'
// Used in CSS classes, HTML attributes, URLs

// ============================================================================
// 4. VARIABLE NAMING RULES
// ============================================================================

// VALID variable names:
let validName = "OK";
let _privateVar = "OK";
let $jqueryStyle = "OK";
let name123 = "OK";
let camelCaseExample = "OK";
let UPPERCASE = "OK";

// INVALID variable names:
// let 123name = "Error"; // Cannot start with a number
// let first-name = "Error"; // Cannot use hyphens
// let first name = "Error"; // Cannot have spaces
// let class = "Error"; // Cannot use reserved keywords
// let function = "Error"; // Cannot use reserved keywords

// Reserved keywords that CANNOT be used as variable names:
// break, case, catch, class, const, continue, debugger, default, delete,
// do, else, export, extends, finally, for, function, if, import, in,
// instanceof, let, new, return, super, switch, this, throw, try, typeof,
// var, void, while, with, yield

// ============================================================================
// 5. DATA TYPES IN VARIABLES
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1 PRIMITIVE DATA TYPES
// ----------------------------------------------------------------------------

// String - Text data
let greeting = "Hello, World!";
let singleQuotes = "Also a string";
let templateLiteral = `Template literal with ${greeting}`;
console.log(typeof greeting); // Output: string

// Number - Integers and decimals
let age = 25;
let price = 99.99;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;
console.log(typeof age); // Output: number

// Boolean - true or false
let isActive = true;
let hasPermission = false;
console.log(typeof isActive); // Output: boolean

// Undefined - Variable declared but not assigned
let notAssigned;
console.log(notAssigned); // Output: undefined
console.log(typeof notAssigned); // Output: undefined

// Null - Intentional absence of value
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object (this is a known JavaScript quirk!)

// Symbol - Unique identifier (ES6)
let uniqueId = Symbol("id");
let anotherId = Symbol("id");
console.log(uniqueId === anotherId); // Output: false (each symbol is unique)
console.log(typeof uniqueId); // Output: symbol

// BigInt - Large integers (ES2020)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: bigint

// ----------------------------------------------------------------------------
// 5.2 REFERENCE DATA TYPES (Objects)
// ----------------------------------------------------------------------------

// Object - Collection of key-value pairs
let student = {
  name: "Alice",
  age: 20,
  grade: "A",
};
console.log(typeof student); // Output: object

// Array - Ordered collection of values
let colors = ["red", "green", "blue"];
let mixedArray = [1, "two", true, null, { key: "value" }];
console.log(typeof colors); // Output: object
console.log(Array.isArray(colors)); // Output: true

// Function - Reusable block of code
let greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(typeof greet); // Output: function

// Date - Date and time
let today = new Date();
console.log(typeof today); // Output: object

// ============================================================================
// 6. VARIABLE SCOPE
// ============================================================================

// ----------------------------------------------------------------------------
// 6.1 GLOBAL SCOPE
// ----------------------------------------------------------------------------
// Variables declared outside any function or block
let globalVar = "I am global";

function testGlobal() {
  console.log(globalVar); // Can access global variable
}
testGlobal(); // Output: I am global

// ----------------------------------------------------------------------------
// 6.2 FUNCTION SCOPE (var)
// ----------------------------------------------------------------------------
// Variables declared with var are function-scoped
function functionScopeExample() {
  var functionVar = "I am function-scoped";

  if (true) {
    var functionVar2 = "I am also function-scoped";
  }

  console.log(functionVar); // Output: I am function-scoped
  console.log(functionVar2); // Output: I am also function-scoped (accessible!)
}
functionScopeExample();
// console.log(functionVar); // Error: functionVar is not defined

// ----------------------------------------------------------------------------
// 6.3 BLOCK SCOPE (let and const)
// ----------------------------------------------------------------------------
// Variables declared with let and const are block-scoped
function blockScopeExample() {
  let blockVar = "I am in function scope";

  if (true) {
    let blockVar2 = "I am in block scope";
    const blockConst = "I am also in block scope";
    console.log(blockVar); // Output: I am in function scope
    console.log(blockVar2); // Output: I am in block scope
  }

  console.log(blockVar); // Output: I am in function scope
  // console.log(blockVar2); // Error: blockVar2 is not defined
}
blockScopeExample();

// ----------------------------------------------------------------------------
// 6.4 LEXICAL SCOPE (Nested Functions)
// ----------------------------------------------------------------------------
// Inner functions have access to outer function variables
function outerFunction() {
  let outerVar = "I am from outer function";

  function innerFunction() {
    let innerVar = "I am from inner function";
    console.log(outerVar); // Can access outer variable
    console.log(innerVar);
  }

  innerFunction();
  // console.log(innerVar); // Error: innerVar is not defined
}
outerFunction();

// ============================================================================
// 7. VARIABLE HOISTING
// ============================================================================

// ----------------------------------------------------------------------------
// 7.1 VAR HOISTING
// ----------------------------------------------------------------------------
// var declarations are hoisted and initialized with undefined
console.log(hoistedVarExample); // Output: undefined (no error)
var hoistedVarExample = "I am hoisted";
console.log(hoistedVarExample); // Output: I am hoisted

// ----------------------------------------------------------------------------
// 7.2 LET and CONST HOISTING (Temporal Dead Zone)
// ----------------------------------------------------------------------------
// let and const are hoisted but NOT initialized
// Accessing them before declaration causes ReferenceError

// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not accessible before declaration";

// console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am also not accessible before declaration";

// ============================================================================
// 8. VARIABLE ASSIGNMENT AND OPERATIONS
// ============================================================================

// ----------------------------------------------------------------------------
// 8.1 BASIC ASSIGNMENT
// ----------------------------------------------------------------------------
let x = 10;
let y = 20;
let z = x + y;
console.log(z); // Output: 30

// ----------------------------------------------------------------------------
// 8.2 MULTIPLE DECLARATIONS
// ----------------------------------------------------------------------------
let a = 1,
  b = 2,
  c = 3;
console.log(a, b, c); // Output: 1 2 3

// ----------------------------------------------------------------------------
// 8.3 DESTRUCTURING ASSIGNMENT (ES6)
// ----------------------------------------------------------------------------
// Array destructuring
let [first, second, third] = [10, 20, 30];
console.log(first); // Output: 10
console.log(second); // Output: 20

// Object destructuring
let user = { username: "john_doe", email: "john@example.com" };
let { username, email } = user;
console.log(username); // Output: john_doe
console.log(email); // Output: john@example.com

// ----------------------------------------------------------------------------
// 8.4 COMPOUND ASSIGNMENT OPERATORS
// ----------------------------------------------------------------------------
let num = 10;
num += 5; // num = num + 5
console.log(num); // Output: 15

num -= 3; // num = num - 3
console.log(num); // Output: 12

num *= 2; // num = num * 2
console.log(num); // Output: 24

num /= 4; // num = num / 4
console.log(num); // Output: 6

num %= 4; // num = num % 4
console.log(num); // Output: 2

// ============================================================================
// 9. TYPE COERCION AND CONVERSION
// ============================================================================

// ----------------------------------------------------------------------------
// 9.1 IMPLICIT COERCION (Automatic)
// ----------------------------------------------------------------------------
let result1 = "5" + 2; // String concatenation
console.log(result1); // Output: "52"

let result2 = "5" - 2; // Number subtraction
console.log(result2); // Output: 3

let result3 = "5" * "2"; // Number multiplication
console.log(result3); // Output: 10

// ----------------------------------------------------------------------------
// 9.2 EXPLICIT CONVERSION (Manual)
// ----------------------------------------------------------------------------
// String to Number
let strNum = "123";
let convertedNum1 = Number(strNum);
let convertedNum2 = parseInt(strNum);
let convertedNum3 = parseFloat("123.45");
let convertedNum4 = +strNum; // Unary plus operator
console.log(convertedNum1, convertedNum2, convertedNum3, convertedNum4);

// Number to String
let numStr = 123;
let convertedStr1 = String(numStr);
let convertedStr2 = numStr.toString();
let convertedStr3 = "" + numStr;
console.log(convertedStr1, convertedStr2, convertedStr3);

// To Boolean
let truthyValue = Boolean(1); // true
let falsyValue = Boolean(0); // false
console.log(truthyValue, falsyValue);

// ============================================================================
// 10. BEST PRACTICES
// ============================================================================

// ✅ DO: Use const by default
const API_ENDPOINT = "https://api.example.com";

// ✅ DO: Use let when you need to reassign
let counter = 0;
counter++;

// ❌ DON'T: Use var in modern JavaScript
// var oldStyle = "avoid this";

// ✅ DO: Use descriptive names
const userEmailAddress = "user@example.com";

// ❌ DON'T: Use single letters (except in loops)
// let x = "user@example.com";

// ✅ DO: Initialize variables
let totalPrice = 0;

// ❌ DON'T: Leave variables uninitialized unless necessary
// let uninitializedVar;

// ✅ DO: Use camelCase for variables
// const firstName = "John";

// ✅ DO: Use SCREAMING_SNAKE_CASE for true constants
const MAX_RETRY_ATTEMPTS = 3;

// ✅ DO: Group related variable declarations
const userFirstName = "John";
const userLastName = "Doe";
const userAge = 25;

// ============================================================================
// 11. COMMON PITFALLS AND MISTAKES
// ============================================================================

// Pitfall 1: Forgetting to declare variables (creates global variable in non-strict mode)
function problematicFunction() {
  // accidentalGlobal = "Oops!"; // Creates global variable (bad!)
  let properLocal = "Good!"; // Properly scoped
}

// Pitfall 2: Confusing == with ===
let loosely = 5 == "5"; // true (type coercion)
let strictly = 5 === "5"; // false (no type coercion)
console.log(loosely, strictly);

// Pitfall 3: Modifying const object/array reference vs content
const settings = { theme: "dark" };
settings.theme = "light"; // OK - modifying content
// settings = { theme: "light" }; // Error - changing reference

// Pitfall 4: Variable shadowing
let message = "Outer message";
{
  let message = "Inner message"; // Different variable (shadowing)
  console.log(message); // Output: Inner message
}
console.log(message); // Output: Outer message

// ============================================================================
// END OF VARIABLE GUIDE
// ============================================================================

console.log("\n✅ All variable concepts covered successfully!");
console.log(
  "📚 Study these examples carefully to master JavaScript variables!"
);
