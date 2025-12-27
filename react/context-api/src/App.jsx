import React from "react";
import Child1 from "./Child1";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const postman = createContext();

const App = () => {
  let data = {
    name: "vikas",
    age: 25,
    salary: 12345678,
  };
  return (
    <postman.Provider value={data}>
      <div>
        <Child1 />
      </div>
    </postman.Provider>
  );
};

export default App;
