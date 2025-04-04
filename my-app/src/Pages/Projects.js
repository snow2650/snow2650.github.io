import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      image: "/path-to-image.jpg", // Add your image path
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project1",
      liveDemo: "https://project1-demo.com"
    },
    // Add more projects here
  ];

  return (
    <div className="projects-container" style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1>My Projects</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem 0'
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={project.image} 
              alt={project.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '4px'
              }}
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{
                  backgroundColor: '#e1e1e1',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '15px',
                  fontSize: '0.9rem'
                }}>
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
