import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, About, Contact, User, Github } from './components/index.js'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "about",
        element : <About /> 
      },
      {
        path : "contact",
        element : <Contact />
      },
      {
        path : "user/:id",
        element : <User />
      },
      {
        path : "github",
        element : <Github />
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
