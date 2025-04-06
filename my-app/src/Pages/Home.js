import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to My Playground</h1>
      <p style={{ margin: '10px 0', fontSize: '19px', color: '#555' }}>
        Explore the different sections of this website by clicking on the images below.
      </p>

      <p style={{ margin: '10px 0', fontSize: '19px', color: '#555' }}>
        
        <Link to="/AboutMe" >
        ABOUT Me.
        </Link>
      </p>
      
      <div className="image-container"
      style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
        <Link to="/Cars" className="image-link">
          <img src="/images/40.jpg" alt="Cars" />
        </Link>
        <Link to="/Games" className="image-link">
          <img src="/images/52.jpg" alt="Games" />
        </Link>
        <Link to="/Projects" className="image-link">
          <img src="/images/31.jpg" alt="Projects" />
        </Link>
        <Link to="/Diary" className="image-link">
          <img src="/images/46.jpg" alt="Diary" />
        </Link>
       
      </div>
    </div>
    
  );
};

export default Home;

