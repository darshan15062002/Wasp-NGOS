import React from 'react'
import tutor from "../../img/tutor.png"

const About = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1 className='head'>Connect. Learn. Succeed.</h1>
        <p className='para'>Paragraph</p>
      </div>
      <div className="right">
        <img src={tutor} alt="" />
      </div>
    </div>
  )
}

export default About