import React from 'react';
import '../App.css';  

const AboutUsComponent = () => {
  return (
    <div>
      <div className="content">
        <h1>Unleash AI-enabled Data-driven Learning – Get Your Personalized Demo Today!</h1>
        <div className="feature-toggle-buttons">
          <button className="contact-btn">Contact us</button>
          <button className="book-demo-btn">Book Demo</button>
        </div>
        <p>Trusted by Teachers at over 1,000 of India's leading Schools</p>
        <div className="logos">
          <img className="schlImg" src="/images/sch1.png" alt="Logo 1" />
          <img className="schlImg" src="/images/sch2.png" alt="Logo 2" />
          <img className="schlImg" src="/images/sch3.png" alt="Logo 3" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;