import React from 'react'
import './Hero2.css'
import heroImg from '../Hero2/hero2-img.png'
const Hero2 = () => {
  return (
    <div className='Hero2'>
      <div className='text-hero2'><h1>Best IT Service Award 2023</h1></div>
      <div className='hero2-box'>
        <span><img src={heroImg} alt="" /></span>
        <div><strong>Ezitech Is affiliated With <a style={{textDecoration:"none", color:"#3467eb"}} href="/"> Eziline Software House</a></strong> . Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.
        <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel quaerat corrupti velit ratione odit doloremque aut exercitationem ullam, voluptate iste maxime illum, deleniti ex nulla minus obcaecati ad eligendi.
        </div>
        
        <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem quo velit quod sequi unde itaque molestias dolores repellendus! Repellat delectus asperiores praesentium natus! Doloribus dicta aliquam aspernatur consectetur ratione.
        </div>
        <button style={{margin:"13px"}}>Eziline Profile</button>
        </div>
      </div>

    </div>
  )
}

export default Hero2
