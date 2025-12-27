import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const response = fetch("https://dummyjson.com/products");
    response.then((res) => res.json().then((data) => console.log(data)));

    return () => {
      console.log("memory cleaned");
    };
  }, []);
  // console.log("api called");
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p className="para">value of count:{count}</p>
      <button onClick={handleClick}>increment</button>
    </div>
  );
};

export default App;
