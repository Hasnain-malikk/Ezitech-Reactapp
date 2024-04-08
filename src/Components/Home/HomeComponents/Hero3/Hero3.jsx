import React from 'react'
import './Hero3.css'
import img1 from './img1.jpeg'
import Hero3Card from './Hero3Card'

const Hero3 = () => {
  return (
    <div className='hero3'>
      <p>How it Works?</p>
      <div>
      <Hero3Card  title="Sign Up" desc="Enter your name, email, and contact details to get started. It truly is that simple!" />
      <Hero3Card  title="Sign Up" desc="Enter your name, email, and contact details to get started. It truly is that simple!" />
      <Hero3Card  title="Sign Up" desc="Enter your name, email, and contact details to get started. It truly is that simple!" />
      </div>
    </div>

  )
}

export default Hero3
