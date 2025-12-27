import React from "react";
import Child from "./Child";

const Card = ({ fullname, age }) => {
  //   console.log(props);
  return (
    <div>
      <Child fullname={fullname} age={age} />
    </div>
  );
};

export default Card;
