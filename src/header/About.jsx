import React from 'react'
import aboutImg from '../images/about-img.jpg';
import './Home.css';
// import './About.css';
const About = () => {
  return (
    <>
   <div className="content">
      <div className="text-overlay">
        <marquee><h1 className='page-name'>About Publication Management System</h1></marquee>
        <h2>A room without books is like a body without a soul.</h2>
      </div>

      <img src={aboutImg} alt="Sample" className="photo" />
  </div>
  </>
  )
}

export default About;

