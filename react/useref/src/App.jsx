import React from "react";
import { useState, useRef } from "react";
import "./App.css";
// import { useEffect } from "react";
import { useLayoutEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const ref1 = useRef();
  // console.log(ref);
  // ref.current.style.backgroundColor = "red";
  // ref1.current.style.backgroundColor = "green";

  useLayoutEffect(() => {
    ref.current.style.backgroundColor = "red";
    ref1.current.style.display = "none";
  });

  // let a = 1;
  // console.log("api called");
  const handleClick = () => {
    setCount(count + 1);
    // a = a + 1;
    // ref.current = ref.current + 1;
    // console.log(ref.current);
  };
  return (
    <div>
      <p ref={ref}>value of count:{count}</p>
      <button ref={ref1} onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default App;
