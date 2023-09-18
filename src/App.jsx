import React from 'react'
import './App.css'
import {Navbar, About, Profile, Experience, Projects, Contact, Footer} from './components'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App
