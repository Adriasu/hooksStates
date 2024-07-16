import React from "react";
import LikeButton from "./components/LikeButton";
import ColorTheme from "./components/ColorTheme";
import ParentComponentA from "./components/ParentComponentA";


const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="p-10">EJERCICIO 1</p>

      <LikeButton />

      <p className="p-10">EJERCICIO 2</p>

      <ColorTheme/>

      <p className="p-10">EJERCICIO 3</p>

      <ParentComponentA/>

    </div>
  );
};

export default App;
