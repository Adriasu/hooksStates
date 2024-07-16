import React from "react";
import LikeButton from "./components/LikeButton";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="p-10">EJERCICIO 1</p>

      <LikeButton />

      <p className="p-10">EJERCICIO 2</p>
    </div>
  );
};

export default App;
