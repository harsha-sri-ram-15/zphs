import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: '#1976d2',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 10,
        height: '56px',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.09)',
        fontSize: '1rem',
      }}
    >
      {/* Left side: logo and copyright */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/images/bseap_logo.png"
          alt="AP Government Logo"
          style={{
            height: '36px',
            width: '36px',
            objectFit: 'contain',
            marginRight: '1rem',
          }}
        />
        <span style={{ fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '1rem', marginRight: '0.5rem' }}>&copy;</span>
          2025. All rights reserved by Govt. of A.P.
        </span>
      </div>
      {/* Right side: designer credit, 2 lines */}
      <div style={{ textAlign: 'right', lineHeight: 1.2 }}>
        <div>Developed by:</div>
        <div style={{ fontWeight: 500 }}>D Harsha Sri Ram</div>
      </div>
    </footer>
  );
}

export default Footer;
