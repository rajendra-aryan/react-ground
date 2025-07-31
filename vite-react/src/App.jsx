import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  const addValue = () => {
    if (counter<20){
      setCount(counter+1)
    }
  }
  const removeValue =()=>{
    if(counter>0){
      setCount(counter-1)
    }
  }

  return (
    <>
      <h1>Hello There!</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add </button><br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App