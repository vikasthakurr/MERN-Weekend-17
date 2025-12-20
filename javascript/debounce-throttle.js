/**
 * DEBOUNCE VS THROTTLE
 *
 * Debounce:
 *   - Ensures that a function is not called until a certain amount of time has passed since the last time it was invoked.
 *   - Useful for search bars, window resizing, etc.
 *   - "Wait for the user to stop doing the thing before doing the thing."
 *
 * Throttle:
 *   - Ensures that a function is called at most once in a specified time period.
 *   - Useful for scrolling events, continuous button clicks (like shooting in a game).
 *   - "Do the thing only once every X milliseconds, no matter how many times the user asks."
 */

// Debounce Implementation
// function searchWithDebounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

//throttle....

// Throttle Implementation
// Reducing the frequency of function execution to improve performance
function searchWithThrottle(fn, delay) {
  // 'Lastcall' keeps track of the timestamp when the function was last executed.
  // We initialize it to 0 so the function can run immediately on the first call.
  let Lastcall = 0;
  return function (...args) {
    // 'currentCall' captures the exact time of the current function invocation.
    let currentCall = Date.now();

    // The condition checks if the time elapsed since the last execution (currentCall - Lastcall)
    // is greater than or equal to the specified 'delay'.
    if (currentCall - Lastcall >= delay) {
      // If the condition is met, execute the original function 'fn' with its arguments.
      fn(...args);

      // Update 'Lastcall' to the current time to reset the timer for the next execution.
      Lastcall = currentCall;
    }
  };
}
function search(name) {
  console.log(`searching for ${name}`);
}

const searchInput = searchWithThrottle(search, 300);
// searchInput("vikas");
// const searchInput = searchWithDebounce(search, 500);
searchInput("vikas");
searchInput("vikas kumar");
searchInput("vikas kumar thakur");
