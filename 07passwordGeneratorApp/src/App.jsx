import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed,setNumbersAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')



 const generatePassword = useCallback(()=>{

  let pass = ''

  let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  if(numbersAllowed) str+='0123456789'
  if(charAllowed) str+='!@#$%^&*()_+|}{:"?><*-++'

  for(let i =0;i<length;i++){
    let index = Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(index)
  }

  setPassword(pass)


  },[length,numbersAllowed,charAllowed,setPassword])

 const passwordRef =  useRef(null)

 const copyHandler = useCallback(() =>{
  passwordRef.current.select()
  passwordRef.current?.setSelectionRange(0, 50);

  document.execCommand('copy')
    // window.navigator.clipboard.writeText(password)

 },[password])


  useEffect(()=>{
    generatePassword()

  },[length,numbersAllowed,charAllowed])

  return (
    <div className=' w-full max-w-screen-md mx-auto px-10 py-20 mt-20 flex justify-center bg-slate-800 rounded-xl'>

      <div className='w-full px-5 py-8 bg-slate-100 rounded-md' >

        <h1 className='text-center text-2xl font-semibold mb-5'>Password Generator</h1>

        <div className='flex shrink-0 overflow-hidden rounded-xl mb-5'>
          <input type="text"
          className='outline-none px-5 py-2 font-semibold border-2 text-xl border-gray-400  p-2 w-full'
          placeholder='password'
          value={password}
          ref={passwordRef}
          readOnly
          
          
          />

          <button onClick={copyHandler} className='bg-blue-500 px-4 py-2 outline-none font-bold'>COPY</button>

        </div>

        <div className='flex justify-evenly items-center flex-wrap text-orange-700 font-semibold text-xl'>

         <div>
         <input type="range" 
          min={8}
          max={24}
          value={length}
          onChange={(e)=>setLength(e.target.value)}
          
          />
          <label>length : {length}</label>
         </div>

         <div>
         <input type="checkbox" 
          defaultChecked = {numbersAllowed}
          value={numbersAllowed}
          onChange={(e)=> setNumbersAllowed(prev =>!prev)}
          
          />
          <label>Numbers</label>
         </div>


        <div>
        <input type="checkbox" 
          defaultChecked = {charAllowed}
          value={charAllowed}
          onChange={(e)=> setCharAllowed(prev =>!prev)}
          
          />
          <label>special chars</label>
        </div>

        </div>


      </div>


    </div>
  )
}

export default App