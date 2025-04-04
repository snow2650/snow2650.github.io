import React, { useState } from 'react';

const Games = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const games = [
    {
      id: 1,
      title: "Unity",
      image: "/images/unity.jpg",
      review: "Excellent game engine for both 2D and 3D development. Great community support and asset store."
    },
    {
      id: 2, 
      title: "Unreal Engine",
      image: "/images/unreal.jpg",
      review: "Powerful engine with stunning graphics capabilities. Best suited for high-end 3D games."
    },
    {
      id: 3,
      title: "Godot",
      image: "/images/godot.jpg", 
      review: "Open-source engine with growing community. Great for 2D games and indie developers."
    },
    {
      id: 4,
      title: "GameMaker",
      image: "/images/gamemaker.jpg",
      review: "User-friendly engine perfect for 2D game development. Ideal for beginners."
    }
  ];

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Game Development Technologies</h1>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => handleCardClick(game.id)}
            style={{
              cursor: 'pointer',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transform: selectedCard === game.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease',
              filter: selectedCard && selectedCard !== game.id ? 'grayscale(80%)' : 'none',
              backgroundColor: 'white',
            }}
          >
            <img
              src={game.image}
              alt={game.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px'
              }}
            />
            <h3 style={{ margin: '10px 0' }}>{game.title}</h3>
            <p style={{ 
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.4'
            }}>
              {game.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
