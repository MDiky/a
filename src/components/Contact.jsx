import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <p className="contact-text">
              I'm currently open to new opportunities. Whether you have a question, 
              a project proposition, or just want to say hi, I'll try my best to 
              get back to you!
            </p>
            
            <div className="contact-method">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="contact-method-text">
                <h4>Email</h4>
                <p>hello@example.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="contact-method-text">
                <h4>Location</h4>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="contact-method-text">
                <h4>Phone</h4>
                <p>+62 812 3456 7890</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-control" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
