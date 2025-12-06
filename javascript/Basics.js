// WHAT IS JAVASCRIPT?
// ----------------------------------------------------------------------------
// Definition: JavaScript is a high-level, interpreted programming language
// Used for: Web development (client-side and server-side with Node.js)
// Type: Dynamically typed, prototype-based, multi-paradigm

// Key Features:
// - Runs in the browser and on servers (Node.js)
// - Single-threaded with asynchronous capabilities
// - Event-driven and non-blocking
// - Supports functional, object-oriented, and imperative programming

// ----------------------------------------------------------------------------
// HOW JAVASCRIPT RUNS
// ----------------------------------------------------------------------------

// JavaScript Execution Process:
// 1. Source Code → Parser → Abstract Syntax Tree (AST)
// 2. AST → Interpreter → Bytecode
// 3. Bytecode → Execution (with JIT compilation for optimization)

// Example code
console.log("Hello, JavaScript!");

// This code goes through:
// 1. Parsing - code is analyzed and converted to AST
// 2. Compilation - converted to bytecode
// 3. Execution - bytecode is executed by the engine

// ----------------------------------------------------------------------------
// JAVASCRIPT ENGINE (V8)
// ----------------------------------------------------------------------------

// V8 Engine (used in Chrome and Node.js):
// - Developed by Google
// - Written in C++
// - Compiles JavaScript to machine code

// V8 Components:
// 1. Parser - converts code to AST
// 2. Ignition (Interpreter) - generates bytecode
// 3. TurboFan (Compiler) - optimizes hot code to machine code
// 4. Garbage Collector - manages memory

// ----------------------------------------------------------------------------
// JIT (JUST-IN-TIME) COMPILATION
// ----------------------------------------------------------------------------

// Definition: Compiles code during execution, not before
// Combines benefits of interpretation and compilation

// How JIT Works:
// 1. Code is first interpreted (fast startup)
// 2. Hot code (frequently executed) is identified
// 3. Hot code is compiled to optimized machine code
// 4. Optimized code runs faster

// Example:
function add(a, b) {
  return a + b;
}

// First few calls - interpreted
add(5, 3);
add(10, 20);

// After many calls - JIT compiles to machine code for speed
for (let i = 0; i < 10000; i++) {
  add(i, i + 1); // This will be optimized by JIT
}

// ----------------------------------------------------------------------------
// EXECUTION CONTEXT
// ----------------------------------------------------------------------------

// Definition: Environment where JavaScript code is executed

// Types:
// 1. Global Execution Context - created when script runs
// 2. Function Execution Context - created when function is called

// Execution Context has:
// - Variable Environment (variables, functions)
// - Scope Chain (access to outer variables)
// - this keyword

let globalVar = "I'm global";

function test() {
  let localVar = "I'm local";
  console.log(globalVar); // Can access global
  console.log(localVar); // Can access local
}

test();

// ----------------------------------------------------------------------------
// CALL STACK
// ----------------------------------------------------------------------------

// Definition: Data structure that tracks function calls
// Works on LIFO (Last In, First Out) principle

function first() {
  console.log("First function");
  second();
  console.log("First function end");
}

function second() {
  console.log("Second function");
  third();
  console.log("Second function end");
}

function third() {
  console.log("Third function");
}

first();

// Call Stack:
// 1. first() is pushed
// 2. second() is pushed
// 3. third() is pushed
// 4. third() completes and is popped
// 5. second() completes and is popped
// 6. first() completes and is popped

// ----------------------------------------------------------------------------
// MEMORY MANAGEMENT
// ----------------------------------------------------------------------------

// Stack Memory:
// - Stores primitive values
// - Stores function calls
// - Fast access, limited size

// Heap Memory:
// - Stores objects and arrays
// - Larger size, slower access
// - Managed by Garbage Collector

let num = 10; // Stored in stack
let obj = { name: "John" }; // Reference in stack, object in heap

// ----------------------------------------------------------------------------
// GARBAGE COLLECTION
// ----------------------------------------------------------------------------

// Definition: Automatic memory management
// Removes objects that are no longer referenced

// Example:
let person = { name: "Alice" }; // Object created in heap
person = null; // Object is no longer referenced
// Garbage collector will eventually remove it

// ----------------------------------------------------------------------------
// SIMPLE EXECUTION EXAMPLE
// ----------------------------------------------------------------------------

// This demonstrates the complete flow:

// 1. Code is parsed
// 2. Global execution context is created
// 3. Variables are hoisted
// 4. Code is executed line by line

var x = 5; // Variable declaration hoisted, assigned value
console.log(x); // 5

function greet(name) {
  return "Hello, " + name;
}

let result = greet("World"); // Function execution context created
console.log(result); // "Hello, World"
