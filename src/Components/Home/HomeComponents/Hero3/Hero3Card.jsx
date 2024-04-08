import React from 'react'
import img1 from './img2.jpeg'

const Hero3Card = (props) => {
  return (
    <div>
      <img src={img1} alt="" />
      <p style={{fontSize:"21px", fontWeight:"400"}}>{props.title}</p>
      <p style={{fontSize:"15px", fontWeight:"400"}}>{props.desc}</p>
    </div>
  )
}

export default Hero3Card
