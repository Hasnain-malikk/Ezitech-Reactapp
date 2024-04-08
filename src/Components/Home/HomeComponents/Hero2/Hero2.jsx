import React from 'react'
import './Hero2.css'
import heroImg from '../Hero2/hero2-img.png'
const Hero2 = () => {
  return (
    <div className='Hero2'>
      <div className='text-hero2'><h1>Best IT Service Award 2023</h1></div>
      <div className='hero2-box'>
        <span><img style={{height:"375px"}} src={heroImg} alt="" /></span>
        <div style={{padding:"0 55px"}}><strong>Ezitech Is affiliated With <a style={{textDecoration:"none", color:"#3467eb"}} href="/"> Eziline Software House</a></strong> . Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.
        <div className="text">
        This award is a huge source of motivation and inspiration for the entire team at Eziline Software House.<strong> It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction</strong>. The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.
        </div>
        
        <div className="text">
        <strong>Ismail Shah, the CEO of Eziline Software House Pvt Ltd</strong> ,received the Best Services Award in the IT sector from the <strong>President of Pakistan, Dr. Arif Alvi,</strong> in recognition of his remarkable contributions to the country’s technology industry.
        </div>
        <button style={{margin:"10px 0"}}>Eziline Profile</button>
        </div>
      </div>

    </div>
  )
}

export default Hero2
