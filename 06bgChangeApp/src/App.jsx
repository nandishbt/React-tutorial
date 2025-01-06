import React, { useState } from 'react'
import Button from './components/Button'

function App() {

  const [bgColor, setBgColor] = useState('grey')

  return (
    <div style={
      {backgroundColor: bgColor }
    } className='w-full h-screen bg-slate-200 p-10'>





      <div className='fixed bottom-10 inset-x-0 px-10 py-5 rounded-xl border-slate-800 bg-slate-100 mx-20 flex flex-wrap justify-between gap-2'>
        <Button setBgColor = {setBgColor} color = "red"  textColor = "white" />
        <Button  setBgColor = {setBgColor} color = "green"  textColor = "white" />
        <Button setBgColor = {setBgColor}  color = "blue"  textColor = "white" />
        <Button setBgColor = {setBgColor}  color = "yellow"  textColor = "black" />
        <Button setBgColor = {setBgColor}  color = "black"  textColor = "white" />
        <Button setBgColor = {setBgColor}  color = "violet"  textColor = "black" />
        <Button setBgColor = {setBgColor}  color = "purple"  textColor = "white" />
        <Button setBgColor = {setBgColor}  color = "orange"  textColor = "white" />
        <Button setBgColor = {setBgColor}  color = "white"  textColor = "black" />

      </div>
    </div>

    
  )
}

export default App