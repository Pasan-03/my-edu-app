import React from 'react';
import './App.css';
import Header from './components/Header';
import MeetOurExperts from './components/Experts';
import StudentTestimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MeetOurExperts />
      <StudentTestimonials />
      <Footer />
    </div>
  );
}

export default App;
