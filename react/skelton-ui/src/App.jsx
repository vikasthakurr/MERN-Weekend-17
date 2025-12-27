import React from "react";
import Card from "./Card";
import Skelton from "./Skelton";
import { useState, useEffect } from "react";
// import { lazy } from "react";

// const Skelton = lazy(() => import("./Skelton"));`
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return <div>{loading ? <Skelton /> : <Card />}</div>;
};

export default App;
