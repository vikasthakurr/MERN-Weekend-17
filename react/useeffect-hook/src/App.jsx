import React from "react";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("api called");
  }, []);
  return <div>App</div>;
};

export default App;
