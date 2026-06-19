import React from 'react';
import { Code2, Database, Layout, Smartphone, Server, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout /> },
    { name: 'Backend', icon: <Server /> },
    { name: 'Database', icon: <Database /> },
    { name: 'Mobile', icon: <Smartphone /> },
    { name: 'API Design', icon: <Code2 /> },
    { name: 'DevOps', icon: <Terminal /> },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a dedicated software engineer with a passion for building scalable, 
              efficient, and aesthetically pleasing web applications. With years of experience 
              in full-stack development, I enjoy tackling complex problems and turning 
              them into simple, beautiful interface designs.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work on the 
              internet, which evolved into a career of continuous learning and building. 
              When I'm not coding, you can find me exploring new technologies or 
              contributing to open-source projects.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>
          </div>
          
          <div className="skills-container">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
