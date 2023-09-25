import React from 'react'
import './App.css'
import {Navbar, About, Profile} from './components'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import router from './router/router'
import Spinner from './components/spinner/Spinner'
//  Profile, Experience, Projects, Contact, Footer


const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
      
      {/* <Spinner/> */}
    </div>
  )
}

export default App
