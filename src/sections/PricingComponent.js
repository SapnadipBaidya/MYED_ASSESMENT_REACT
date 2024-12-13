import "../App.css";
import React from 'react';

const PricingComponent = () => {
  return (<div className="pricing-container">
  <h1>Make your school future ready</h1>
    <div style={{
      backgroundColor: '#f0f8f8', 
      padding: '2rem',
      borderRadius: '12px',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        color: '#333',
      }}>Free While in Beta</h2>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: '0 0 2rem',
        lineHeight: '2rem',
      }}>
        {[
          'Full Access',
          'Unlimited Usage',
          'Priority Access',
          'Frequent Updates',
          'Open Roadmap',
        ].map((text, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            color: '#333',
          }}>
            <img
              src="/images/tick.png" 
              alt="check"
              style={{ width: '20px', height: '20px', marginRight: '0.5rem' }}
            />
            {text}
          </li>
        ))}
      </ul>

      <button
        style={{
          backgroundColor: '#1a73e8', 
          color: '#fff',
          border: 'none',
          padding: '0.8rem 2rem',
          borderRadius: '6px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
        onClick={() => alert('Free Trial Activated!')}
      >
        Try for Free 🚀
      </button>
    </div>
    </div>
  );
};

export default PricingComponent;
