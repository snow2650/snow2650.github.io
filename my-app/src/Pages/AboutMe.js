import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AboutMe = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // debugging
  useEffect(() => {
    console.log('AboutMe component mounted');
    console.log('Selected Section:', selectedSection);
  }, [selectedSection]);

  const aboutSections = [
    {
      id: 'background',
      title: 'Background',
      icon: '🌍',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      content: 'I am a passionate individual with a diverse background in technology and creative pursuits.'
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: '💻',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      content: 'Proficient in web development, programming, and design with extensive experience in modern technologies.'
    },
    {
      id: 'hobbies',
      title: 'Hobbies',
      icon: '🎨',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      content: 'I enjoy exploring new technologies, photography, and continuous learning.'
    },
    {
      id: 'goals',
      title: 'Goals',
      icon: '🚀',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      content: 'Committed to personal growth and creating innovative solutions that make a difference.'
    }
  ];

  const closeModal = () => {
    console.log('Closing modal');
    setSelectedSection(null);
    setIsModalOpen(false);
  };
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      
      <div className="relative w-[400px] h-[400px] mx-auto">
        {aboutSections.map((section, index) => {
          // Calculate position around a circle
          const angle = (index / aboutSections.length) * 360;
          const radius = 180;
          
          return (
            <div 
              key={section.id}
              className={`absolute w-32 h-32 rounded-full flex flex-col items-center justify-center 
                ${section.color} ${section.hoverColor} 
                transform transition-all duration-300 ease-in-out cursor-pointer
                hover:scale-110 shadow-lg`}
              style={{
                top: `calc(50% + ${radius * Math.sin(angle * Math.PI / 180)}px)`,
                left: `calc(50% + ${radius * Math.cos(angle * Math.PI / 180)}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => setSelectedSection(section)}
            >
              <span className="text-3xl mb-2">{section.icon}</span>
              <span className="text-white font-semibold">{section.title}</span>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={!!selectedSection}
        onRequestClose={() => setSelectedSection(null)}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedSection && (
          <div className={`${selectedSection.color} p-8 rounded-xl max-w-md w-full mx-4 text-center relative`}>
            <button 
              onClick={() => setSelectedSection(null)} 
              className="absolute top-4 right-4 text-white hover:text-gray-200"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">{selectedSection.title}</h2>
            <div className="text-3xl mb-4">{selectedSection.icon}</div>
            <p className="text-white text-lg">{selectedSection.content}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};
console.log('about me run 2')
export default AboutMe;