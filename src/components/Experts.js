// components/Experts.js
import React from 'react';


const Experts = () => {
  return (
    <section className="experts-section">
      <h2>Meet Our Experts</h2>
      <div className="experts">
        <div className="expert-card">
        <img src={process.env.PUBLIC_URL + '/images/teacher1.jpg'} alt="Expert 1" />
          <h3>Jane Doe</h3>
          <p>Mathematics Specialist</p>
        </div>
        <div className="expert-card">
        <img src={process.env.PUBLIC_URL + '/images/teacher2.jpg'} alt="Expert 2" />
          <h3>John Smith</h3>
          <p>Physics Specialist</p>
        </div>
        <div className="expert-card">
        <img src={process.env.PUBLIC_URL + '/images/teacher3.jpg'} alt="Expert 3" />
          <h3>Emily Stone</h3>
          <p>Chemistry Specialist</p>
        </div>
        <div className="expert-card">
        <img src={process.env.PUBLIC_URL + '/images/teacher4.jpg'} alt="Expert 4" />
          <h3>Michael Brown</h3>
          <p>Biology Specialist</p>
        </div>
      </div>
    </section>
  );
};

export default Experts;
