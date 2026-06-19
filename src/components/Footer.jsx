import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          Portfolio<span className="text-gradient">.</span>
        </div>
        
        <div className="footer-social">
          <a href="#" aria-label="GitHub"><FaGithub size={20} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
          <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
        </div>
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
