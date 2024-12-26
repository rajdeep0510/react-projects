import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed ] = useState(false)
  const [password, setPassword] = useState("")
  const [buttonValue, setButtonValue] = useState("Copyed")
 
  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "1234567890"  
    if (charAllowed) str += "@#$%&*"  
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const passwordRef = useRef()

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    setButtonValue("Copyed")
  }, [password])

  useEffect(() => {
    passwordGen()
    setButtonValue("Copy")
  }, [length, numberAllowed, charAllowed, setPassword]) 

  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-600">
      <h1 className="text-4xl text-center text-white ">PasswordGen</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 mb-2 rounded-md "
          placeholder="password"
          readOnly
          ref={passwordRef} />
          <button className="outline-none bg-yellow-300 text-black py-2 px-3 mb-2 rounded-md ml-2 " onClick={copyToClipboard}>{buttonValue}</button>
        </div>
        <div className="flex text-sm gap-x-2 pb-4">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange = {(e) => {setLength(e.target.value)}} />
          </div>
          <label>Length : {length}</label>
      
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>

          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }} />
          <label htmlFor="numberInput">Characters</label>

        </div>
      </div>
    </>
  )
}

export default App

