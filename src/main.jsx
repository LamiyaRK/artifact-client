import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider } from 'react-router'


import HomeLayout from './Layouts/HomeLayout.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { router } from './Routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router}>
    <HomeLayout/>
    </RouterProvider>
  </AuthProvider>
    
  </StrictMode>,
)
