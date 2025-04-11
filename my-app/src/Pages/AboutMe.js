import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const AboutMe = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(null);
  //const [isModalOpen, setIsModalOpen] = useState(false);

  // debugging
  // useEffect(() => {
  //   console.log('AboutMe component mounted');
  //   console.log('Selected Section:', selectedSection);
  // }, [selectedSection]);

  const aboutSections = [
    {
      id: 'background',
      title: 'Background',
      icon: '🌍',
      color: 'bg-blue-500',
      //hoverColor: 'hover:bg-blue-600',
      content: 'I am a passionate individual with a diverse background in technology and creative pursuits.'
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: '💻',
      //color: 'bg-green-500',
      //hoverColor: 'hover:bg-green-600',
      content: 'Proficient in web development, programming, and design with extensive experience in modern technologies.'
    },
    {
      id: 'hobbies',
      title: 'Hobbies',
      icon: '🎨',
      //color: 'bg-purple-500',
      //hoverColor: 'hover:bg-purple-600',
      content: 'I enjoy exploring new technologies, photography, and continuous learning.'
    },
    {
      id: 'goals',
      title: 'Goals',
      icon: '🚀',
      //color: 'bg-red-500',
      //hoverColor: 'hover:bg-red-600',
      content: 'Committed to personal growth and creating innovative solutions that make a difference.'
    }
  ];

  // const closeModal = () => {
  //   console.log('Closing modal');
  //   setSelectedSection(null);
  //   setIsModalOpen(false);
  // };
  const sectionStyle = {
    padding: '30px',
    width: '200px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: '#4299e1', // Actual blue color instead of 'bg-blue'
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    color: 'white', // Added for better contrast on blue background
  };

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '30px',
      maxWidth: '500px',
    },
  };
 
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '100vh',
      padding: '40px 0'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>About Me</h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1200px',
        padding: '0 20px'
      }}>
        {aboutSections.map((section) => (
          <div
            key={section.id}
            style={sectionStyle}
            onClick={() => setSelectedSection(section)}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '2em', marginBottom: '10px' }}>{section.icon}</div>
            <h2>{section.title}</h2>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedSection}
        onRequestClose={() => setSelectedSection(null)}
        style={modalStyle}
      >
        {selectedSection && (
          <div>
            <h2>{selectedSection.title}</h2>
            <p>{selectedSection.content}</p>
            <button 
              onClick={() => setSelectedSection(null)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
      <button 
        onClick={() => navigate(-1)}
        style={{
          marginTop: '40px',
          padding: '10px 30px',
          backgroundColor: '#4299e1',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4299e1'}
      >
        Back to Home
      </button>
    </div>
  );
};

export default AboutMe;