import React from 'react';

// List your PDFs here: { title, url }
const pdfFiles = [
  {
    title: 'Smart Classrooms',
    url: 'https://drive.google.com/file/d/19atprRS1FmLgeCpxQ3q__A2OdkfAqdJi/preview',
  },
  {
    title: 'Furniture',
    url: 'https://drive.google.com/file/d/1Fw6f0iIwAhRebvXWZqUVXbsJXZd1jnHO/preview',
  },
  {
    title: 'Internet Facility',
    url: 'https://drive.google.com/file/d/1qDQmVIO10NHgAJbSBcVjDYjtCisMeoxp/preview',
  },
  {
    title: 'Library',
    url: 'https://drive.google.com/file/d/13TlJe55q8gOu5kwoDAyQ0b1EcafhxkrE/preview',
  },
  {
    title: 'Eco Club Activities',
    url: 'https://drive.google.com/file/d/1728o0qxJMQul9Vze_zI_V2bIsTn3sDCo/preview',
  },
  {
    title: 'Bag less Days',
    url: 'https://drive.google.com/file/d/1XWdeLy5E1xMqbwFeMEFYtgb6MN3CNI3v/preview',
  },
  {
    title: 'Clean Drinking Water',
    url: 'https://drive.google.com/file/d/1B615WzHx9mPgOcdF_hvOF8i-FuAHNNV3/preview',
  },
  {
    title: 'Hand Wash Facility',
    url: 'https://drive.google.com/file/d/1U__bnuZgfYtfi1TQuoXk9RdEQD4C82mL/preview',
  },
  {
    title: 'Wash Rooms Facility',
    url: 'https://drive.google.com/file/d/147LO-guzgkcYYO7xJlV8621VFJPNqU21/preview',
  },
  {
    title: 'Child Tracking',
    url: 'https://drive.google.com/file/d/11dG1cicXZYVgXkb5tmhO6bw4GlWM0p2v/preview',
  },
  {
    title: 'Atal Tinkering Lab',
    url: 'https://drive.google.com/file/d/1fpsNMv0Zaqqsqcm9PklBD7hKyGmRbi05/preview',
  },
  {
    title: 'Integrated Science Lab',
    url: 'https://drive.google.com/file/d/10IQeFehB5YnJ6c4We1oY6H7bwK9ZNxYT/preview',
  },
  {
    title: 'Teaching Learning Material',
    url: 'https://drive.google.com/file/d/1r5p2ChHpxw98fDVNlx61DpzfylruopMZ/preview',
  },
  {
    title: 'School Innovation Council',
    url: 'https://drive.google.com/file/d/1ToqC8zOd1WRxFCXcikWTqZEzEmaqO4_O/preview',
  },
  {
    title: 'School Leadership',
    url: 'https://drive.google.com/file/d/1aekQtSZCPT2g_SsNxScVkUubFDe2PGr7/preview',
  },
  {
    title: 'Skill Education',
    url: 'https://drive.google.com/file/d/15Ng83_cmJx9BoFLi_A2m7QhYjgGoV1Oj/preview',
  },
  {
    title: 'Career Guidance and Counselling',
    url: 'https://drive.google.com/file/d/1DEjCnRXK8ewfa4XhPzSLb6KHSyokL4RS/preview',
  },
  {
    title: 'Self Defense',
    url: 'https://drive.google.com/file/d/1GIiFQbPnYLhT07ZF65ApqjsOVP13QqSn/preview',
  },
  {
    title: 'Issue of ID Cards',
    url: 'https://drive.google.com/file/d/1q6xRsPivj8tTwrviv6oixjcnERNhkBdN/preview',
  },
  {
    title: 'Best Practices',
    url: 'https://drive.google.com/file/d/1XNWiOdPhyD2RRHF0bojGuKXnGEDCUwgw/preview',
  },
  // Add more PDFs as needed
];

function Achievements() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '1100px',
        background: 'none',
        position: 'relative',
        zIndex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: '200px',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '1000px',           // Fixed width for desktop
          maxWidth: '95vw',         // Responsive on small screens
          margin: '50px auto 0 auto',
          padding: '2.5rem 2rem',
          background: 'rgba(255, 236, 179, 0.92)',
          color: '#1a237e',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          boxSizing: 'border-box',
          marginBottom: '120px',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '2.3rem',
            marginBottom: '2rem',
            marginLeft: '-100px',
          }}
        >
          Achievements
        </h1>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {pdfFiles.map((pdf, idx) => (
            <li key={idx} style={{ marginBottom: '1.2rem' }}>
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '1.08rem',
                  color: '#0d47a1',
                  textDecoration: 'underline',
                  fontWeight: 600,
                  cursor: 'pointer',
                  wordBreak: 'break-word',
                }}
              >
                {pdf.title}
              </a>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '1.08rem', color: '#263238', margin: 0, marginTop: '2rem' }}>
          Click on any achievement title to view or download the PDF.
        </p>
      </div>
    </div>
  );
}

export default Achievements;
