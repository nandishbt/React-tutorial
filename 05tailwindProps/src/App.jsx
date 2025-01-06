import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-green-700 p-5 rounded-lg'>Props and Tailwind</h1>
      <Card name = "ram" btntext = "Click here"/>
     
    </>
  )
}

export default App
