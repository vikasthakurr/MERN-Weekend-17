/*
============================================
JAVASCRIPT PROMISES - COMPREHENSIVE NOTES
============================================

1. WHAT IS A PROMISE?
----------------------
Definition: A Promise is an object representing the eventual completion (failure or success)
of an asynchronous operation and its resulting value.

It acts as a placeholder for a value that you don't have yet, but will have in the future.
Think of it like a "token" you get at a restaurant. The food (value) isn't ready yet,
but the token (Promise) guarantees you'll get it (resolve) or be told it's out of stock (reject).

3 States of a Promise:
1. PENDING: The initial state. neither fulfilled nor rejected.
2. FULFILLED (RESOLVED): Operation completed successfully.
3. REJECTED: Operation failed.


2. CREATING A PROMISE (INSTANTIATION)
--------------------------------------
Syntax:
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous code here
  let success = true;
  
  if (success) {
    resolve("Operation Successful!"); // Changes state to FULFILLED
  } else {
    reject("Operation Failed!");      // Changes state to REJECTED
  }
});


3. CONSUMING PROMISES (.then, .catch, .finally)
-----------------------------------------------
Once a promise is created, we need to handle its result.

a) .then(onFulfilled):
   - Executes when the promise is RESOLVED.
   - Receives the resolved value as an argument.

b) .catch(onRejected):
   - Executes when the promise is REJECTED.
   - Receives the error reason as an argument.
   - Handles errors from the original promise OR any errors in the .then chain.

c) .finally(onFinally):
   - Executes when the promise is settled (either resolved or rejected).
   - Used for cleanup code (e.g., hiding a loading spinner).

Example:
myPromise
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Cleanup: Operation finished");
  });


4. PROMISE CHAINING
--------------------
Defintion: The mechanism of connecting multiple .then() handlers to execute asynchronous
operations in sequence.

- If you return a value from a .then(), it passes to the next .then().
- If you return a NEW PROMISE from a .then(), the next .then() waits for it to settle.

Example:
fetchUser()
  .then(user => {
    return fetchPosts(user.id); // Returns a new Promise
  })
  .then(posts => {
    console.log(posts); // Waits for fetchPosts to resolve
    return "All done";  // Returns a simple value
  })
  .then(msg => {
    console.log(msg);   // Prints "All done"
  })
  .catch(err => console.log(err)); // Catches errors from ANY step above


5. STATIC METHODS OF PROMISE
-----------------------------
Methods enabling us to work with multiple promises at once.

a) Promise.all([p1, p2, ...])
   - Waits for ALL promises to fulfill.
   - Returns array of results.
   - If ANY promise rejects, the entire `all` rejects immediately (fail-fast).

b) Promise.allSettled([p1, p2, ...])
   - Waits for ALL promises to settle (resolve OR reject).
   - Returns array of objects describing the outcome of each promise.
     e.g., [{status: 'fulfilled', value: ...}, {status: 'rejected', reason: ...}]
   - Never rejects (unless the iterator throws).

c) Promise.race([p1, p2, ...])
   - Returns the result of the FIRST promise that settles (resolves OR rejects).
   - Used for timeouts (e.g., race a fetch against a 5s timeout).

d) Promise.any([p1, p2, ...])
   - Waits for the FIRST promise to FULFILL (resolve).
   - Ignores rejections unless ALL reject.
   - If all reject, it throws an AggregateError.

e) Promise.resolve(value) / Promise.reject(reason)
   - Quickly creates an already resolved or rejected promise.

*/

/* 
============================================
EXISTING CODE EXAMPLES
============================================
*/

// const p1 = new Promise((resolve, reject) => {
//   resolve("bike lelo");
// });
// // console.log(p1);
// p1.then((data) => {
//   console.log(data);
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("process done");
//   });
// const res = fetch("https://dummyjson.com/products/1");
// console.log(res);

// const p1 = Promise.reject("success");
// const p2 = Promise.reject("success2");
// const p3 = Promise.reject("something went wrong");

// //promise.all

// Promise.any([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products/1");

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchData();
