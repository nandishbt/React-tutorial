import React, { useEffect } from 'react'
import useCurrencyInfo from './hooks/CurrencyInfo'
import { useState } from 'react'
import InputBox from './components/InputBox'

function App() {

  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')

  const [amount,setAmount] = useState(1)
  const [convertedAmount,setConvertedAmount] = useState(0)


  

  let currencyInfo = useCurrencyInfo(from)

 const options = Object.keys(currencyInfo)

 const convert = () =>{
  setConvertedAmount(amount * currencyInfo[to])
 }

 const swap = () =>{
  setFrom(to)
  setTo(from)
 
 }



  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                // backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                onchangeAmount = {(c)=>setAmount(c)}
                                options = {options}
                                disabled = {false}
                                onchangeoption = {(c)=>setFrom(c)}
                                currency = {from}
                            
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {convertedAmount}
                                onchangeAmount = {(c)=>setConvertedAmount(c)}
                                options = {options}
                                disabled = {true}
                                onchangeoption = {(c)=>setTo(c)}
                                currency = {to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App