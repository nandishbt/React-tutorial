import React from 'react'

function Button({color,setBgColor,textColor}) {

    
  return (
    <>
    <button onClick={()=>{
        setBgColor(color)
    }} style={{
        backgroundColor : color, //
       color:textColor
       
        
    }} className={`px-4 py-2 rounded-full min-w-20 outline-none shadow-xl`}>{color}</button>
    
    </>
  )
}

export default Button