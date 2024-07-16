import React from "react";
import { useState } from "react";

const LikeButton = () => {
  const bgColors = ["bg-[#884EA0]", "bg-[#2E86C1]", "bg-[#2ECC71]", "bg-[#F7DC6F]", "bg-[#DC7633]", "bg-[#E74C3C]"];

  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState(0);
  const addLikes = () => {
    setLikes((prev) => (prev += 1));
    //setColor((prevIndex) => (prevIndex < bgColors.length-2 ? prevIndex+1 : 0))
    setColor((prevIndex) => (prevIndex + 1) % bgColors.length)
  };

  return (
    <div>
      <button 
      className={`${bgColors[color]} border w-36 h-10 flex items-center justify-center rounded text-xl`}
      onClick={addLikes}
      >
        <span className="mr-1">{likes}</span> Likes
      </button>
    </div>
  );
};




export default LikeButton;
