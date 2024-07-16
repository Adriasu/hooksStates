import React from "react";
import ButtonColorTheme from "./ButtonColorTheme";

const ColorTheme = () => {
  return (
    <div className="w-[600px] flex flex-col items-center justify-center gap-3 border-[2px] border-black p-3">
      <h1>Titulo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        repudiandae sequi quos corporis possimus iste officiis omnis velit
        fugiat itaque? Harum architecto esse fugit rem perspiciatis placeat
        cumque quaerat deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde magnam
        autem animi fuga impedit maiores aut enim ratione. Totam, laboriosam.
        Laboriosam molestiae pariatur maxime explicabo facilis aliquam totam
        excepturi blanditiis?
      </p>
      <ButtonColorTheme/>
    </div>
  );
};

export default ColorTheme;
