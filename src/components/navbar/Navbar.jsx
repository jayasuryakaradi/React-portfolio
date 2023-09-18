import React, { useState } from 'react'
import './navbar.css'
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  const [toggle, setToggle]=useState(false)
  return (
    <nav className='portfolio-nav'>
        <div className="portfolio-nav__logo">
          <a href="#home"><h1>Jayasurya Karadi</h1></a>
        </div>
        <div>
          <ul id='navbar' className={`${toggle?" active scale-up-ver-top":""}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className='portfolio-nav__mobile'>
          {toggle?<AiOutlineClose fontSize={"22px"}  onClick={()=>setToggle(prev=>!prev)}/>: <BiMenu fontSize={"22px"} onClick={()=>setToggle(prev=>!prev)}/>}
        </div>
    </nav>
  )
}

export default Navbar
