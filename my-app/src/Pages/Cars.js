import React from 'react';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';
import { Link } from 'react-router-dom';
import './Cars.css';

const Cars = () => {
  return (
    <div className="cars-container">
      <Link to="/" className="back-to-home">
        Back to Home
      </Link>
      <div className="cars-header">
        <h1>My Car Collection</h1>
        <p className="subtitle">A journey through my automotive history</p>
      </div>
      <div className="car-grid">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
