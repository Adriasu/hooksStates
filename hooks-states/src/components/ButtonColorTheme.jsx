import React from "react";

const ButtonColorTheme = ({ lightDark, classColorTheme, changeLightDark }) => {
  return (
    <button
      onClick={changeLightDark}
      className={`${classColorTheme} w-[70px] rounded-lg`}
    >
      {lightDark === true ? "Dark" : "Light"}
    </button>
  );
};

export default ButtonColorTheme;
