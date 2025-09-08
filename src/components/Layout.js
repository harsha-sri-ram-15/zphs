import React from 'react';

function Layout({ children }) {
  return (
    <div>
      {/* Background */}
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: 'url("/images/school_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      {/* Foreground Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
