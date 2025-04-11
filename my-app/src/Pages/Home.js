import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.backgroundColor = '#f5f5f5';
    e.target.parentElement.style.display = 'flex';
    e.target.parentElement.style.alignItems = 'center';
    e.target.parentElement.style.justifyContent = 'center';
    e.target.parentElement.innerHTML = `<div style="text-align: center; padding: 20px;">
      <p style="color: #999;">Image not available</p>
    </div>`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to My Playground</h1>
      <p style={{ margin: '10px 0', fontSize: '19px', color: '#555' }}>
        Explore the different sections by clicking on the seals below.
        And guess what's inside!
      </p>

      <p className="image-container" style={{ margin: '10px 0', fontSize: '19px', color: '#555' }}>
        
      <Link to="/AboutMe" className="about-link"
        style={{
          padding: '10px 20px',
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
          borderRadius: '25px',
          color: 'white',
          textDecoration: 'none',
          // transition: 'transform 0.2s',
          display: 'inline-block',
          '&:hover': {
            animation: 'vibrate 0.5s linear infinite'}
          }}
          onMouseEnter={(e) => e.target.classList.add('vibrate-button')}
          onMouseLeave={(e) => e.target.classList.remove('vibrate-button')}
          >
            🌟 Get to Know Me 🌟
      </Link>      
      </p>
      
      <div className="image-container"
        style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
        <Link to="/Cars" className="image-link">
          <img 
            src={process.env.PUBLIC_URL + "/images/40.jpg"} 
            alt="Cars" 
            onError={handleImageError}
          />
        </Link>
        <Link to="/Games" className="image-link">
          <img 
          src={process.env.PUBLIC_URL + "/images/52.jpg"} 
          alt="Games"
          onError={handleImageError} 
          />
        </Link>
        <Link to="/Projects" className="image-link">
          <img 
          src={process.env.PUBLIC_URL + "/images/31.jpg"}  
          alt="Projects" 
          onError={handleImageError}
          />
        </Link>
        <Link to="/Diary" className="image-link">
          <img 
          src={process.env.PUBLIC_URL + "/images/46.jpg"}  
          alt="Diary" 
          onError={handleImageError}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;

