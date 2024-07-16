import React from 'react'

const ComponentC = ({numValueX, sumNumber}) => {
  return (
    <div className='flex flex-col gap-5 p-5 items-start w-[600px] h-[150px] border-[2px] border-black'>
       <h1>ComponentC</h1>
       <p>x = {numValueX}</p>
       <button 
       className='bg-[#006fff]'
       onClick={sumNumber}
       >x++</button>
    </div>
  )
}

export default ComponentC
