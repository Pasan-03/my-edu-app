// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="section">
          <h4>Learn More</h4>
          <p>Discover resources and study tips to excel in your exams.</p>
        </div>
        <div className="section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Experts</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="section">
          <h4>Get in Touch</h4>
          <p>info@edufusion.com</p>
          <p>+123 456 789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 EduFusion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
