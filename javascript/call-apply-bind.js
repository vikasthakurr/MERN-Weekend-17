/**
 * CALL, APPLY, BIND (Explicit Binding)
 * These methods allow us to control the value of 'this' inside a function.
 *
 * 1. call(): Invokes the function immediately. Arguments are passed individually.
 * 2. apply(): Invokes the function immediately. Arguments are passed as an array.
 * 3. bind(): Returns a NEW function with 'this' bound to the specified object. Does NOT invoke immediately.
 */

// Function Borrowing: Using a method from one object on another object.
//function borrowing
let obj1 = {
  fname: "vikas",
  lname: "thakur",
  age: 25,
  print: function (city) {
    console.log(
      `your name is ${this.fname} ${this.lname} and your age is ${this.age} and your city is ${city}`
    );
  },
};

// obj1.print();

let obj2 = {
  fname: "rohit",
  lname: "singh",
  age: 22,
};

// obj1.print(obj2);

// 1. CALL
// Syntax: function.call(thisArg, arg1, arg2, ...)
// Here, we borrow the 'print' method from obj1 and use it with obj2 as 'this'.
// obj1.print.call(obj2, "delhi");

// 2. APPLY
// Syntax: function.apply(thisArg, [argsArray])
// Similar to call, but arguments are passed in a list/array.
// obj1.print.apply(obj2, ["delhi"]);

// 3. BIND
// Syntax: const newFunc = function.bind(thisArg, arg1, arg2, ...)
// Returns a copy of the function which can be invoked later.
// Note: We are immediately invoking the returned function with () at the end here.
obj1.print.bind(obj2, "delhi")();
// console.log(res);
// res();
