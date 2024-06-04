import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Componentes/Home/Home.jsx'
import Sobre from './Componentes/Sobre/Sobre.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:"sobre",
        element:<Sobre/>,
      },
      
    ],
  },
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GoogleOAuthProvider clientId='178421746047-arv54g3qt2jfct4uas9v8nb89a0ar407.apps.googleusercontent.com'>

      
    <RouterProvider router={router}/>

    </GoogleOAuthProvider>
  </React.StrictMode>,
)
