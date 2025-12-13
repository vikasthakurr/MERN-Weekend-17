/*
============================================
JAVASCRIPT ASYNC / AWAIT - COMPREHENSIVE NOTES
============================================

1. WHAT IS ASYNC/AWAIT?
------------------------
Definition: Async/Await is a modern syntactic sugar built on top of Promises.
It makes asynchronous code look and behave like synchronous code, making it
easier to read, write, and debug.

Introduced in: ES2017 (ES8)

2. THE 'ASYNC' KEYWORD
-----------------------
- Usage: Placed before a function declaration or expression.
- Effect: 
  1. It transforms the function into an Asynchronous Function.
  2. It automatically returns a Promise.
     - If the function returns a value, the Promise is RESOLVED with that value.
     - If the function throws an error, the Promise is REJECTED with that exception.

Example:
async function getData() {
  return "Hello"; 
}
// Is equivalent to:
function getData() {
  return Promise.resolve("Hello");
}


3. THE 'AWAIT' KEYWORD
-----------------------
- Usage: Can ONLY be used inside an 'async' function (or top-level in modules).
- Effect: 
  1. pauses the execution of the async function.
  2. Waits for the Promise to resolve.
  3. Returns the resolved value of the Promise.
- Benefit: Eliminates the need for .then() chains and callbacks.

Note: 'await' blocks the execution code INSIDE the async function, but it 
does NOT block the main thread (other scripts can still run).


4. HOW AWAIT WORKS (UNDER THE HOOD)
------------------------------------
When the JavaScript engine encounters 'await':
1. It suspends the execution of the async function.
2. It throws the promise out of the function and goes back to executing
   other synchronous code in the call stack (event loop).
3. Once the promise resolves, it pushes the function back onto the 
   call stack (microtask queue) to resume execution from where it stopped.


5. ERROR HANDLING (TRY / CATCH)
--------------------------------
Since .catch() is used with Promises, we use the standard try...catch block
for handling errors in async/await.

syntax:
async function fetchData() {
  try {
    const data = await promise;
    console.log(data);
  } catch (error) {
    console.error("Task Failed:", error);
  }
}


6. COMPARISON: PROMISES VS ASYNC/AWAIT
---------------------------------------

A) Using .then() (Promise Chain):
   function getUser() {
     fetch('/user')
       .then(response => response.json())
       .then(user => fetch(`/posts/${user.id}`))
       .then(response => response.json())
       .then(posts => console.log(posts))
       .catch(err => console.error(err));
   }

B) Using Async/Await (Cleaner):
   async function getUser() {
     try {
       const response = await fetch('/user');
       const user = await response.json();
       
       const postResponse = await fetch(`/posts/${user.id}`);
       const posts = await postResponse.json();
       
       console.log(posts);
     } catch (err) {
       console.error(err);
     }
   }

*/

/*
============================================
PRACTICAL EXAMPLES
============================================
*/

// Example 1: Basic Async Function
async function greet() {
  return "Hello World!";
}

greet().then(console.log); // Output: Hello World!

// Example 2: Real-world Fetch Example
async function fetchProduct() {
  console.log("1. Starting fetching...");

  try {
    // 1. Fetch data (Wait for network request)
    const response = await fetch("https://dummyjson.com/products/1");
    // Execution pauses here until value is available

    // 2. Parse JSON (Wait for parsing)
    const data = await response.json();

    console.log("2. Data received:", data.title);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("3. Operation completed");
  }
}

// fetchProduct();
// console.log("4. This prints BEFORE data received because await only pauses the function!");

// Example 3: Handling Multiple Awaits (Sequential vs Parallel)

// SEQUENTIAL (Slower - one by one)
async function getSequential() {
  const user = await fetch("https://dummyjson.com/users/1");
  const posts = await fetch("https://dummyjson.com/posts/1");
  // Second fetch waits for first to finish
}

// PARALLEL (Faster - both start at once)
async function getParallel() {
  const userPromise = fetch("https://dummyjson.com/users/1");
  const postsPromise = fetch("https://dummyjson.com/posts/1");

  // Wait for both to complete
  const [user, posts] = await Promise.all([userPromise, postsPromise]);
}
