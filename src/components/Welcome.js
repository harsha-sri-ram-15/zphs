/** 
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url("/school_bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      / Overlay for text readability 
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(112, 175, 248, 0.88)',
          zIndex: 1,
        }}
      />
      / Foreground Content 
      <div
        className="d-flex flex-column align-items-center"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '4rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textShadow: '1px 1px 6px #00000055',
            marginTop: '250px', // Move heading up
            marginBottom: 'auto', // Push rest of content down
          }}
        >
          Welcome to ZPHS Raghudevapuram Website
        </h1>
        <div style={{ flex: 1 }} />
        <button
            className="btn btn-light btn-lg"
            onClick={handleEnter}
            style={{
                fontSize: '1.0rem',
                fontWeight: 600,
                padding: '12px 36px',
                marginTop: '20px',    // Adds a small space below the welcome line
                marginBottom: '1000px',    // No extra space at the bottom
            }}
            >
            Enter
        </button>

      </div>
    </div>
  );
}

export default Welcome;
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url("/school_bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {/* Overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(112, 175, 248, 0.88)',
          zIndex: 1,
        }}
      />
      {/* Foreground Content */}
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          width: '100vw',
          textAlign: 'center',
          padding: '0 5vw',
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textShadow: '1px 1px 6px #00000055',
            margin: 0,
            marginBottom: '2rem',
            lineHeight: 1.1,
          }}
        >
          Welcome to ZPHS Raghudevapuram Website
        </h1>
        <button
          className="btn btn-light btn-lg"
          onClick={handleEnter}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            fontWeight: 600,
            padding: '12px 36px',
            marginTop: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          Enter
        </button>
      </div>
      {/* Inline styles for mobile responsiveness */}
      <style>
        {`
          @media (max-width: 600px) {
            h1 {
              font-size: 2rem !important;
              margin-bottom: 1.5rem !important;
            }
            button {
              font-size: 1rem !important;
              padding: 10px 24px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Welcome;
