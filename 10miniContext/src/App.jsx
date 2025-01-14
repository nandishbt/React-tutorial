import React from 'react'
import UserContextProvider from './assets/context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      
    <Login/>
    <Profile />
    
      
      </UserContextProvider>
  )
}

export default App