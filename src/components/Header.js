// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="banner">
        <h1>EduFusion</h1>
        <p>WORK SMARTER, NOT HARDER</p>
      </div>
      <div className="cta-section">
        <h2>"EduFusion makes learning effortless, empowering students to achieve their best with confidence."</h2>
        <button className="join-button">Join Now</button>
      </div>
      <div className="search-section">
        <p>
          EduFusion gives students an effortless way to manage their learning and prep for exams with confidence. 
          Search through our vast library of materials, notes, and exams tailored for Edexcel and Cambridge students.
        </p>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
    </header>
  );
};

export default Header;
