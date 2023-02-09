import React from 'react'
import logo from "../images/Logo .svg";
import Nav from './Nav';

const Header = () => {
  return (
    <header>
    <div className='header'>
    <img src={logo} alt="Logo" />

    <Nav/>
    </div>
    </header>
  )
}

export default Header