import React, { useState } from 'react'
import '../styles/header.css'

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { IoMdSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";



function Header() {

  const [menuState,setMenuState] = useState(true)
  
  const [themeState,setThemeState] = useState(true)

  const toggleMenu = () => {
    setMenuState(!menuState)
  }

  const darkTheme = "dark_theme";
  const toggleTheme = () => {
    setThemeState(!themeState)
    const root = document.getElementById("body");
    root.classList.toggle(darkTheme);
  }


  return (
    <header className='header'>
      <div className="header-container">
        <div className="header-name">
          <a href="#home">Induwara Rathnasiri</a>
        </div>
        <div className="logo">
          <a href="#home">Induwa Arts</a>
        </div>
        <div className="nav-wrapper">
          <nav className="nav">
            <span className='nav-menu' onClick={toggleMenu}>
              {(menuState)? <IoMenu/> : <IoClose/>}
              menu
            </span>
            <ul className={(menuState)? "nav-links":"nav-links menu-hidden"}>
              <li className="nav-link" onClick={toggleMenu}><a href="#home">home</a></li>
              <li className="nav-link" onClick={toggleMenu}><a href="#about">about</a></li>
              <li className="nav-link" onClick={toggleMenu}><a href="#collection">collection</a></li>
            </ul>
          </nav>
          <div className="theme-toggle" onClick={toggleTheme}>
          {(themeState)? <IoMdSunny/> : <IoIosMoon/>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header