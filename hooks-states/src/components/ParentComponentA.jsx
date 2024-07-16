import React from "react";
import ComponentB from "./ComponentB";


const ParentComponentA = () => {
  return (
    <div className="flex flex-col gap-5 p-5 items-start w-[700px] h-[400px] bg-slate-200 mb-16 border-[2px] border-black">
      
        <h1>ComponentA</h1>
        <p>x = 42</p>
      

      <ComponentB />
      
    </div>
  );
};

export default ParentComponentA;
