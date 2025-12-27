import React from "react";

const Child = (props) => {
  //   console.log(props);

  const handleChange = (e) => {
    props.setName(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="enter your name"
      ></input>
      <p>data in child is :{props.name}</p>
    </div>
  );
};

export default Child;
