import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className='flex flex-col gap-5 p-5 items-start w-[650px] h-[300px] border-[2px] border-black'>
        <h1>ComponentB</h1>
        <p>x = ...</p>

        <ComponentC/>
      
    </div>
  )
}

export default ComponentB
