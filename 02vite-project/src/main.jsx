import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function Here(){
  return (
    <div>
      <h1>Hello Im in Here</h1>
    </div>
  )
}

const MyApp = (
  <h1>Hello Im in vite main</h1>
)

const user = "nandish"
const reactElem = React.createElement(
  'div',
  { 'id': 'app' },
  "MyApp ",
  user
)

createRoot(document.getElementById('root')).render(

  <>
  <Here />
  {MyApp}
  {reactElem}
  </>
  
)
