import React, { useState } from 'react'
import './navbar.css'
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [toggle, setToggle]=useState(false)
  return (
    <nav className='portfolio-nav'>
        <div className="portfolio-nav__logo">
          <NavLink to="/"><h1>Jayasurya Karadi</h1></NavLink>
        </div>
        <div>
          <ul id='navbar' className={`${toggle?" active scale-up-ver-top":""}`}>
          <li><NavLink to="/" onClick={(prev)=>setToggle(!prev)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={(prev)=>setToggle(!prev)}>About</NavLink></li>
            <li><NavLink to="/experience" onClick={(prev)=>setToggle(!prev)}> Experience</NavLink></li>
            <li><NavLink to="/projects" onClick={(prev)=>setToggle(!prev)}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={(prev)=>setToggle(!prev)}>Contact</NavLink></li>
          </ul>
        </div>
        <div className='portfolio-nav__mobile'>
          {toggle?<AiOutlineClose fontSize={"22px"}  onClick={()=>setToggle(prev=>!prev)}/>: <BiMenu fontSize={"22px"} onClick={()=>setToggle(prev=>!prev)}/>}
        </div>
    </nav>
  )
}

export default Navbar
