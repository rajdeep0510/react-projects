import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-3 '>Tailwind Test</h1>
      <Card username="rajdeep" btnText="click me" />
      <Card username="shradhdha" btnText="visit me" />

    </>
  )
}

export default App
