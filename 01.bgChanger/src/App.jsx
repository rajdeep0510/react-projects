import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-700" 
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-6 ml-4 mr-4 rounded-xl ">
          <div className="fixed flex flex-wrap justify-center bottom-12 ml-6 mr-6 rounded-xl bg-white gap-4"> 
            <button className="px-2 py-2 ml-2 mr-2 mt-1 mb-1 outline-none rounded-xl" style={{backgroundColor: "red"}} onClick={() => {setColor("red")}}>Red</button>
            <button className="px-2 py-2 ml-2 mr-2 mt-1 mb-1 outline-none rounded-xl" style={{backgroundColor: "green"}} onClick={() => {setColor("green")}} >Green</button>
            <button className="px-2 py-2 ml-2 mr-2 mt-1 mb-1 outline-none rounded-xl" style={{backgroundColor: "blue"}} onClick={() => {setColor("blue")}} >Blue</button>
            <button className="px-2 py-2 ml-2 mr-2 mt-1 mb-1 outline-none rounded-xl" style={{backgroundColor: "orange"}} onClick={() => {setColor("orange")}} >Orange</button>
            <button className="px-2 py-2 ml-2 mr-2 mt-1 mb-1 outline-none rounded-xl" style={{backgroundColor: "teal"}} onClick={() => {setColor("teal")}} >Teal</button>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
