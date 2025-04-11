import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

const Games = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const games = [
    {
      id: 1,
      title: "Ray Tracing",
      image: "/images/raytracing.jpg",
      review: "Advanced rendering technique that simulates realistic lighting, shadows, and reflections in real-time. Revolutionizing visual fidelity in modern games."
    },
    {
      id: 2, 
      title: "DLSS/FSR",
      image: "/images/dlss.jpg",
      review: "AI-powered upscaling technologies that boost performance while maintaining image quality. NVIDIA's DLSS and AMD's FSR are leading the way."
    },
    {
      id: 3,
      title: "VR Technology", 
      image: "/images/vr.jpg",
      review: "Immersive virtual reality systems with advanced motion tracking and haptic feedback, creating unprecedented gaming experiences."
    },
    {
      id: 4,
      title: "Cloud Gaming",
      image: "/images/cloudgaming.jpg",
      review: "Streaming technology that allows high-end gaming on any device. Services like GeForce Now and Xbox Cloud Gaming are making gaming more accessible."
    },
    {
      id: 5,
      title: "Haptic Feedback",
      image: "/images/haptic.jpg",
      review: "Advanced controller technology that provides realistic tactile feedback, enhancing immersion through precise vibrations and resistance."
    },
    {
      id: 6,
      title: "AI in Gaming",
      image: "/images/ai.jpg",
      review: "Machine learning applications in gaming, from intelligent NPCs to procedural content generation, creating more dynamic and responsive game worlds."
    }
  ];

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="games-container">
      <Link to="/" className="back-to-home">
        Back to Home
      </Link>
      <h1 className="games-header">Gaming Technology</h1>
      <p className="subtitle">Exploring the cutting-edge technologies shaping the future of gaming</p>
      
      <div className="games-grid">
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => handleCardClick(game.id)}
            className={`game-card ${selectedCard === game.id ? 'selected' : ''} ${selectedCard && selectedCard !== game.id ? 'blurred' : ''}`}
          >
            <img
              src={game.image}
              alt={game.title}
              className="game-image"
            />
            <h3 className="game-title">{game.title}</h3>
            <p className="game-review">
              {game.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
