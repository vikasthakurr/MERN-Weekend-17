import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import Child from "./Child";
import { useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //heavy task

  function sum() {
    console.log("function called");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum = sum + i;
    }
    return sum;
  }
  // let res = sum();
  let res = useMemo(() => sum(), []);
  const sayHi = () => {
    console.log("hii buddy");
  };
  // sayHi();

  const res2 = useCallback(() => sayHi(), []);

  const handleClick = () => {
    setCount(count + 1);
  };
  const increment = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <h1>value of heavy duty task is:{res}</h1>
      <p>value of count1 is:{count}</p>
      <button onClick={handleClick}>increment</button>

      <br></br>
      <br></br>
      <p>value of count2:{count2}</p>
      <button onClick={increment}>increment2</button>

      <br></br>
      <br></br>
      <Child count2={count2} sayHi={res2} />
    </div>
  );
};

export default App;
