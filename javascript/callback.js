

/*
 * WHAT IS A CALLBACK?
 * -------------------
 * A callback is a function that is passed as an argument to another function,
 * and is executed (called back) at a later time, usually after some operation completes.
 *
 * The term "callback" comes from: CALL + BACK (later)
 *
 * KEY CONCEPT: In JavaScript, functions are "first-class citizens" - they can be:
 * - Assigned to variables
 * - Passed as arguments to other functions
 * - Returned from functions
 */

/*
 * WHY USE CALLBACKS?
 * ------------------
 * 1. Asynchronous Operations - Handle operations that take time (API calls, file reading, timers)
 * 2. Event Handling - Respond to user interactions (clicks, key presses, etc.)
 * 3. Higher-Order Functions - Create reusable, flexible functions
 * 4. Control Flow - Execute code in a specific order
 * 5. Code Reusability - Pass different behaviors to the same function
 */

/*
 * SYNCHRONOUS vs ASYNCHRONOUS CODE:
 * ----------------------------------
 * SYNCHRONOUS: Code executes line by line, one after another (blocking)
 * ASYNCHRONOUS: Code can execute later, allowing other code to run in the meantime (non-blocking)
 *
 * JavaScript is single-threaded but can handle async operations using:
 * - Callbacks
 * - Promises
 * - Async/Await
 */



/*
 * This is a simple callback example where the callback executes immediately
 */

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  // After greeting, we "call back" the function that was passed in
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Pass sayGoodbye as a callback to greet
greet("Alice", sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!

// We can also use an anonymous function (arrow function) as a callback
greet("Bob", () => {
  console.log("Nice to meet you!");
});
// Output:
// Hello, Bob!
// Nice to meet you!


/*
 * setTimeout is a built-in function that executes a callback after a delay
 * Syntax: setTimeout(callback, delayInMilliseconds)
 */

console.log("Start");

setTimeout(() => {
  console.log("This runs after 3 seconds");
}, 3000);

console.log("End");

/*
 * Output order:
 * Start
 * End
 * This runs after 3 seconds (after 3 seconds)
 *
 * Notice "End" prints before the setTimeout callback!
 * This is because setTimeout is ASYNCHRONOUS - it doesn't block the code execution.
 */


function sayHi(name, callback) {
  setTimeout(() => {
    console.log(`Hi ${name}`);
    // Execute the callback after saying hi
    callback();
  }, 2000);
}

function howAreYou() {
  console.log("How are you?");
}

// sayHi will execute first, then after 2 seconds, howAreYou will be called
sayHi("Vikas", howAreYou);
// Output (after 2 seconds):
// Hi Vikas
// How are you?


/*
 * This example demonstrates sequential operations using callbacks.
 * Each step must complete before the next one begins.
 * This pattern is common in:
 * - API calls (fetch data → process data → display data)
 * - File operations (read file → parse content → save result)
 * - Multi-step processes (register user → send email → redirect)
 */

function makeSandwich(bread, callback) {
  console.log(`${bread} bread is ready`);
  // After bread is ready, move to next step
  callback();
}

function stuffing(callback) {
  console.log("Stuffing is done");
  // After stuffing, move to next step
  callback();
}

function grill(callback) {
  console.log("Grilling is done");
  // After grilling, move to next step
  callback();
}

function serving(callback) {
  console.log("Serving is done, ready to eat");
  // After serving, move to final step
  callback();
}

// Execute steps in sequence using nested callbacks
makeSandwich("wheat", () => {
  stuffing(() => {
    grill(() => {
      serving(() => {
        console.log("Sandwich is complete!");
      });
    });
  });
});

/*
 * Output:
 * wheat bread is ready
 * Stuffing is done
 * Grilling is done
 * Serving is done, ready to eat
 * Sandwich is complete!
 */

// ============================================
// EXAMPLE 5: CALLBACK HELL (PYRAMID OF DOOM)
// ============================================

/*
 * CALLBACK HELL occurs when you have multiple nested callbacks.
 * This makes code:
 * - Hard to read
 * - Hard to maintain
 * - Hard to debug
 * - Hard to handle errors
 *
 * The nested structure creates a "pyramid" shape, hence "Pyramid of Doom"
 */

// Example of callback hell with simulated async operations:
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 1000);
}

// This is callback hell - notice the deep nesting
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps complete!");
      // Imagine having 10+ levels of nesting... 😱
    });
  });
});

/*
 * PROBLEMS WITH CALLBACK HELL:
 * 1. Readability - Hard to follow the flow
 * 2. Error Handling - Need to handle errors at each level
 * 3. Maintainability - Adding/removing steps is difficult
 * 4. Debugging - Hard to trace where errors occur
 */

/*
 * Many JavaScript array methods use callbacks:
 * - forEach() - Execute function for each element
 * - map() - Transform each element
 * - filter() - Select elements based on condition
 * - reduce() - Combine elements into single value
 * - find() - Find first matching element
 * - sort() - Custom sorting logic
 */
