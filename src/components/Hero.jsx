import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-glow"></div>
      <div className="container">
        <div className="hero-content">
          <span className="hero-subtitle">Hello, I'm Diky Imo</span>
          <h1 className="hero-title">
            Building Websites <br />
            <span className="text-gradient">And Android Apps</span>
          </h1>
          <p className="hero-description">
            I'm a passionate frontend developer specializing in building exceptional digital 
            experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#" className="btn btn-outline">
              Download CV <Download size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
