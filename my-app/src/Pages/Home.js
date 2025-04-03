import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to My Website</h1>
      <p style={{ margin: '10px 0', fontSize: '19px', color: '#555' }}>
        Explore the different sections of this website by clicking on the images below.
      </p>



      <div className="image-container"
      style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
        <Link to="/Cars" className="image-link">
          <img src="/images/40.jpg" alt="Page 1" />
        </Link>
        <Link to="/Games" className="image-link">
          <img src="/images/pic2.jpg" alt="Page 2" />
        </Link>
        <Link to="/Projects" className="image-link">
          <img src="/images/pic3.jpg" alt="Page 3" />
        </Link>
       
      </div>
    </div>
  );
};

export default Home;

