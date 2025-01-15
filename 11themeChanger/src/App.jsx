import React, { useEffect } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'


function App() {
  const [mode, setMode] = React.useState('light')

  const lightTheme = ()=>{
    setMode('light')
  }

  const darkTheme = ()=>{
    setMode('dark')
  }

  useEffect(()=>{

    let html = document.querySelector('html')
    html.classList.remove('dark', 'light')
    html.classList.add(mode)

  },[mode])
  return (


    <ThemeProvider value={{mode,lightTheme,darkTheme}}>
      
     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                       
                    </div>
                </div>
            </div>

      
    </ThemeProvider>
  )
}

export default App