import React from "react";
import { memo } from "react";

const Child = ({ count2 }) => {
  console.log("child called");
  return <div>value of count2 in child is:{count2}</div>;
};

export default memo(Child);
