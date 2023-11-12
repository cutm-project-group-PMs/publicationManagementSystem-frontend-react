// Home.jsx
import React from 'react';
import homeImg from '../images/Homepage.jpg';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <>
      <div className="content">
        <div className="text-overlay">
          <marquee><h1 className='page-name'>Welcome to Publication Management System</h1></marquee>
          <h2>A room without books is like a body without a soul.</h2>
          <h3>Welcome to our Publication Management System, where innovation meets organization! In the dynamic world of research and academia, managing publications efficiently is crucial. Our Publication Management System is designed to streamline the entire process, making it effortless for researchers, authors, and administrators to collaborate, publish, and disseminate knowledge effectively.</h3>
        </div>

        <img src={homeImg} alt="Sample" className="photo" />
      </div>
    </>
  );
};

export default Home;


