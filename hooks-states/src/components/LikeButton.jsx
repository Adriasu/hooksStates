import React from "react";
import { useState } from "react";

const LikeButton = () => {
  const bgColors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState(0);
  const addLikes = () => {
    setLikes((prev) => (prev += 1));
    setColor((prevIndex) => (prevIndex + 1) % bgColors.length)
  };

  return (
    <div>
      <button 
      className={`bg-[${bgColors[color]}] w-36 h-10 flex items-center justify-center rounded text-xl`}
      onClick={addLikes}
      >
        <span className="mr-1">{likes}</span> Likes
      </button>
    </div>
  );
};



export default LikeButton;
