// Home.jsx
import React from 'react';
import homeImg from '../images/library-img.jpg';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <h2>A room without books is like<br/> a body without a soul.</h2>
        <img src={homeImg} alt="Sample" className="photo" />
      </div>
    </>
  );
};

export default Home;
