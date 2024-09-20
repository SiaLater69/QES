import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'


const Hero = () => {
  const titles = ['Quality', 'Efficient', 'Service']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(intervalId) // Cleanup on component unmount
  }, [])

  return (
    <section className='hero ubuntu-bold'>
      <img className="hero-logo" src={logo} alt="Company logo" />
      <div className="hero-text">
        <h1 className="hero-title">{titles[currentTitleIndex]}</h1>
      </div>
    </section>
  )
}

export default Hero
