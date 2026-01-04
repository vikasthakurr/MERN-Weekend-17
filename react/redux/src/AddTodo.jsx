import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/TodoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputText == "") return;
    dispatch(addTodo({ text: inputText }));
  };
  return (
    <div>
      <input
        value={inputText}
        onChange={handleChange}
        type="text"
        placeholder="enter any Task"
      ></input>
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
