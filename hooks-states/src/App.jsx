import React from "react";
import LikeButton from "./components/LikeButton";
import ColorTheme from "./components/ColorTheme";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="p-10">EJERCICIO 1</p>

      <LikeButton />

      <p className="p-10">EJERCICIO 2</p>

      <ColorTheme/>
    </div>
  );
};

export default App;
