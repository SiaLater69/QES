import React, { useState } from 'react'
import logo from '../assets/logo.png'


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='Nav'>
      <img className='Nav-logo' src={logo} alt="logo" />
      <div className="Nav-divider"></div>
      <div className="Nav-text-stack1 ubuntu-regular">
        <span>Quality</span>
        <span>Efficient</span>
        <span>Service</span>
      </div>
      <div className={`Nav-text-stack ubuntu-medium ${isMenuOpen ? 'open' : ''}`}>
        <a href='/'><span>About Us</span></a>
        <a href='/'><span>Industries</span></a>
        <a href='/'><span>Contact Us</span></a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Nav
