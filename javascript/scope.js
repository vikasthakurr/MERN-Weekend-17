/**
 * SCOPE AND LEXICAL ENVIRONMENT
 *
 * Scope determines the improved accessibility (visibility) of variables.
 * JavaScript has 3 types of scope:
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope (ES6 - let, const)
 */

// let b = 10;
// let a =20

// Block Scope Example
{
  // Variables declared with let/const inside {} are only accessible here
  //   let b = 20;
}

// Function Scope Example
// function a() {
// //   let b = 30; // 'b' is local to function 'a'
//   console.log(b);
// }

// a();

// Lexical Scope / Closure Example
// Nested functions have access to variables declared in their outer scope.
// let value = 30;
function outer() {
  //   let value = 30;

  function inner() {
    // console.log(value);
    let b = 20;

    function inner1() {
      let value = 30;

      // inner1 can access 'b' from 'inner' function's scope (Lexical Scoping)
      console.log(b);
    }
    b = 40;
    inner1();
  }
  inner();
}
outer();
