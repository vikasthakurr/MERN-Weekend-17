import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Child name={name} setName={setName} />
      <h1>data coming from child is:{name}</h1>
    </div>
  );
};

export default App;
