import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () =>{

    if(count < 20){
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)

      // only 1 setcount func is executed due to fibre diiding algo these are all sent in batches and will overwrite

      setCount(prev => prev + 1)
      setCount(prev => prev + 1)
      setCount(prev => prev + 1)
      setCount(prev => prev + 1)

      // all the 4 setCount func are executed



    }

  }

  const removeCount = () =>{

    if(count > 0){
      setCount(count - 1)
    }

  }



  return (
    <>
      
      <h1>My Counter App</h1>
      <h2>Count is {count}</h2>
      <div className="card">

        <button onClick={addCount}>add count</button>
        <button onClick={removeCount}>remove count</button>

      
      </div>

      <div className="footer">
      <h3>count is {count}</h3>
      </div>
      
    </>
  )
}

export default App
