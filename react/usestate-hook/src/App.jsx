/*
 * ============================================
 * USESTATE HOOK - REACT HOOKS INTRODUCTION
 * ============================================
 *
 * What is useState?
 * -----------------
 * useState is a React Hook that lets you add state to functional components.
 * Before hooks (introduced in React 16.8), only class components could have state.
 * Now, functional components can also manage state using the useState hook.
 *
 * Why do we need useState?
 * ------------------------
 * - React components need to "remember" information between renders
 * - When state changes, React re-renders the component with the new state
 * - Without state, components would be static and couldn't respond to user interactions
 *
 * Syntax:
 * -------
 * const [stateVariable, setStateFunction] = useState(initialValue);
 *
 * - stateVariable: The current state value
 * - setStateFunction: Function to update the state
 * - initialValue: The initial value of the state (can be any data type)
 *
 * Important Rules:
 * ----------------
 * 1. Only call hooks at the top level (not inside loops, conditions, or nested functions)
 * 2. Only call hooks from React function components or custom hooks
 * 3. State updates are asynchronous
 * 4. Never modify state directly - always use the setter function
 */

import { useState } from "react";
import "./App.css";

function App() {
  // ============================================
  // STATE DECLARATION
  // ============================================

  /*
   * Declaring a state variable called 'count' with initial value 0
   * - count: holds the current value of our counter
   * - setCount: function to update the count value
   * - useState(0): initializes count to 0
   */
  const [count, setCount] = useState(0);

  // ============================================
  // EVENT HANDLER FUNCTIONS
  // ============================================

  /*
   * Increment Function
   * ------------------
   * Increases the count by 1
   * We use setCount with the current count value + 1
   */
  const handleIncrement = () => {
    setCount(count + 1);
  };

  /*
   * Decrement Function
   * ------------------
   * Decreases the count by 1
   * We use setCount with the current count value - 1
   */
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // ============================================
  // COMPONENT RENDER
  // ============================================

  /*
   * JSX Return
   * ----------
   * Every time the state changes (count is updated), React re-renders this component
   * The new count value is displayed in the UI automatically
   */
  return (
    <div className="app-container">
      {/* Main heading */}
      <h1>useState Hook - Counter Example</h1>

      {/* 
        Display Section
        ----------------
        Shows the current count value
        This updates automatically when state changes
      */}
      <div className="counter-display">
        <h2>Current Count: {count}</h2>

        {/* 
          Conditional Rendering
          ---------------------
          Display different messages based on count value
        */}
        {count > 0 && <p className="positive">Positive Number! 🎉</p>}
        {count < 0 && <p className="negative">Negative Number! ⚠️</p>}
        {count === 0 && <p className="zero">Starting Point! 🎯</p>}
      </div>

      {/* 
        Button Section
        --------------
        Each button has an onClick event handler that updates the state
        When clicked, the handler function is called, which updates state using setCount
      */}
      <div className="button-group">
        {/* Decrement button - reduces count by 1 */}
        <button onClick={handleDecrement} className="btn btn-danger">
          Decrement (-1)
        </button>

        {/* Increment button - increases count by 1 */}
        <button onClick={handleIncrement} className="btn btn-success">
          Increment (+1)
        </button>
      </div>
    </div>
  );
}

/*
 * ============================================
 * KEY CONCEPTS SUMMARY
 * ============================================
 *
 * 1. STATE INITIALIZATION:
 *    const [count, setCount] = useState(0)
 *    - Creates a state variable with initial value
 *
 * 2. READING STATE:
 *    {count}
 *    - Access the current state value directly
 *
 * 3. UPDATING STATE:
 *    setCount(count + 1) or setCount(0)
 *    - Use setter function to update state
 *    - Pass the new value directly to the setter function
 *
 * 4. RE-RENDERING:
 *    - When state updates, React re-renders the component
 *    - Only the changed parts of the DOM are updated (Virtual DOM)
 *
 * 5. ASYNCHRONOUS UPDATES:
 *    - State updates are batched and asynchronous
 *    - Don't rely on state value immediately after calling setter
 *
 * ============================================
 * COMMON MISTAKES TO AVOID
 * ============================================
 *
 * ❌ DON'T: count = count + 1 (Direct mutation)
 * ✅ DO: setCount(count + 1) (Use setter function)
 *
 * ❌ DON'T: Modify state directly without setter
 * ✅ DO: Always use setCount to update the state
 *
 * ❌ DON'T: Call hooks inside conditions or loops
 * ✅ DO: Call hooks at the top level of your component
 *
 */

export default App;
