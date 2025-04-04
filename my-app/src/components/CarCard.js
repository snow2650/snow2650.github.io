import React from 'react';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-image-container">
        <img src={car.image} alt={car.name} className="car-image" />
      </div>
      <div className="car-content">
        <h2 className="car-title">{car.name}</h2>
        <div className="car-year">{car.year}</div>
        <p className="car-description">{car.description}</p>
        <div className="car-memories">
          <i className="memory-icon">💭</i>
          <p>{car.memories}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard; 