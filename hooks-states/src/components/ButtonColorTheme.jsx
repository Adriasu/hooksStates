import React from 'react'

const ButtonColorTheme = ({lightDark}) => {

  const classColorTheme = lightDark === true ? "border-[2px] border-black bg-slate-100 text-black" : "border-[2px] border-[#35afe8] bg-[#101e33] text-white"

  return (
    
      <button className={`${classColorTheme} w-[70px] rounded-lg`}>{lightDark === true ? "Dark" : "Light"}</button>
    
  )
}

export default ButtonColorTheme
