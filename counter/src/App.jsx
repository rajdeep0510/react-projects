import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  
  let [counter, setCounter] = useState(0)


const addValue = () => {
if (counter < 20) {
  console.log(counter);
  counter = counter + 1
  setCounter(counter)
} else {
  console.error("counter shoule be between 20 and 0");
}
}

const removeValue = () => {
  if (counter > 0) {
    counter = counter - 1
    setCounter(counter)
  }else {
    console.error("counter shoule be between 20 and 0")
  }
}



  // let counter = 0
  return (
    <>
      <h1>Rajdeep Vala {counter}</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue} >Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
