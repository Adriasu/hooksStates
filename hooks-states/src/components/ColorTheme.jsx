import React from "react";
import ButtonColorTheme from "./ButtonColorTheme";
import { useState } from "react";

const ColorTheme = () => {
  const [lightDark, setLightDark] = useState(true);
  const changeLightDark = () => {
    lightDark === true ? setLightDark(false) : setLightDark(true);
  };

  const classColorTheme =
    lightDark === true
      ? "border-[2px] border-black bg-slate-100 text-black"
      : "border-[2px] border-[#35afe8] bg-[#101e33] text-white";

  return (
    <div
      className={`w-[400px] flex flex-col items-center justify-center rounded-md p-3 gap-3 ${classColorTheme}`}
    >
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

      <button onClick={changeLightDark}>
        <ButtonColorTheme lightDark={lightDark} />
      </button>
    </div>
  );
};

export default ColorTheme;
