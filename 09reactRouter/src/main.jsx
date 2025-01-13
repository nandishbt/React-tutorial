import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { About, Contact, Github, Home,User } from './components/index.js'
import { gitinfo } from './components/Github/GitHubInfo.js'


// const router = createBrowserRouter([
//   {path: '/',
//     element:<Layout />,

//     children:[
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'github',
//         element: <Github />
//       },

//     ]

    
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader ={gitinfo} path='github' element={<Github />} />
      <Route path='user/:id' element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
)
