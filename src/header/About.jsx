import React from 'react'
import aboutImg from '../images/Homepage.jpg';
const About = () => {
  return (
    <>
    <div className="content">
      <h1>About</h1>
      <h2>A room without books is like<br/> a body without a soul.</h2>
      <img src={aboutImg} alt="Sample" className="photo" />
    </div>
  </>
  )
}

export default About
