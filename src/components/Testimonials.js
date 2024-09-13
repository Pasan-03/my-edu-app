// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Students Are Saying</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>"EduFusion has been a game-changer for my studies!"</p>
          <span>- Student A</span>
        </div>
        <div className="testimonial">
          <p>"The resources here helped me ace my exams with confidence."</p>
          <span>- Student B</span>
        </div>
        <div className="testimonial">
          <p>"The expert advice and clear explanations made complex subjects easy!"</p>
          <span>- Student C</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
