import React from 'react'
import { useState } from 'react'

const LikeButton = () => {
    const [counter, setCounter] = useState(0);
	const addLikes = () => setCounter(prev => prev += 1);
  return (
    <div>
        <button onClick={addLikes}> <span>{counter}</span> Likes</button>
      
    </div>
  )
}

export default LikeButton
