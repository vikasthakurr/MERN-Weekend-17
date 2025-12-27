import React from "react";
import { useContext } from "react";
import { postman } from "./App";

const Child2 = () => {
  const data = useContext(postman);
//   console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.age}</h2>
      <h3>{data.salary}</h3>
    </div>
  );
};

export default Child2;
