import React, {useState} from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({numValueX}) => {

  const [valueX, setValueX] = useState(0)

  const sumNumber = () => {
    setValueX(() => (numValueX + numValueX))
  }

  return (
    <div className='flex flex-col gap-5 p-5 items-start w-[650px] h-[300px] border-[2px] border-black'>
        <h1>ComponentB</h1>
        <p>x = {valueX}</p>

        <ComponentC numValueX={numValueX} sumNumber={sumNumber}/>
      
    </div>
  )
}

export default ComponentB
