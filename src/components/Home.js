import React, { useState } from 'react';
import './Home.css';

const persons = [
  {
    name: "Sri N. Chandrababu Naidu",
    designation: "Hon'ble Chief Minister,",
    designation2: "Government of Andhra Pradesh",
    photo: "/cbn_pic.jpg",
  },
  {
    name: "Sri K. Pawan Kalyan",
    designation: "Hon'ble Deputy Chief Minister,",
    designation2: "Government of Andhra Pradesh",
    photo: "/pk_pic.jpg",
  },
  {
    name: "Sri Nara Lokesh",
    designation: "Hon'ble Education Minister,",
    designation2: "Government of Andhra Pradesh",
    photo: "/lokesh_pic.jpg",
  },
  {
    name: "Sri V. Vijay Rama Raju",
    designation: "Director of School Education Department,",
    designation2: "Government of Andhra Pradesh",
    photo: "/director_pic.jpg",
  },
  {
    name: "Sri K. Vasudeva Rao",
    designation: "District Educational Officer,",
    designation2: "East Godavari",
    photo: "/deo_pic.jpeg",
  },
];

function Home() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible((v) => !v);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url("/school-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      onClick={toggleVisibility}
    >
      {/* Top Yellow Greet Box */}
      <div
        className={`greet-box fade-slide ${visible ? 'show' : 'hide'}`}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          margin: '20px auto 0 auto',
          padding: '2rem 1rem',
          background: 'rgba(255, 236, 179, 0.92)',
          color: '#1a237e',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          transition: 'box-shadow 0.3s',
          fontSize: '1rem',
          marginBottom: '50px',
        }}
      >
        <h1>Greetings!!</h1>
        <p>
          We are delighted to welcome you to our school website.<br />
          Explore our vibrant learning community and discover what makes us unique.<br />
          We look forward to sharing our achievements and memorable events with you.
        </p>
        <h2>About Us</h2>
        <p>
          At ZPHS Raghudevapuram, we are proud of our students’ accomplishments and the vibrant events that shape our school life.
          To see our proudest moments, visit the <strong>Achievements</strong> page. For photos and memories, check out our <strong>Gallery</strong> page.
        </p>
      </div>

      {/* Bottom Yellow Box for 5 Images with Horizontal Scroll */}
      <div
        className={`img-box fade-slide ${visible ? 'show' : 'hide'}`}
        style={{
          margin: '40px auto 0 auto',
          background: 'rgba(255, 236, 179, 0.96)',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          maxWidth: '1200px',
          padding: '2rem 1.5rem',
          transition: 'box-shadow 0.3s',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '2.2rem',
          marginBottom: '230px',
          overflowX: 'auto',           // Enable horizontal scroll
          overflowY: 'hidden',
        }}
      >
        {persons.map((person, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.82)',
              borderRadius: '14px',
              boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
              padding: '1.2rem 1.2rem',
              width: '200px',        // Wider for more text
              minWidth: '200px',
              maxWidth: '200px',
              height: '210px',        // Allow height to grow with content
              boxSizing: 'border-box',
              justifyContent: 'flex-start',
              marginBottom: 0,
              flexShrink: 0,         // Prevent shrinking in scroll
            }}
          >
            <img
              src={person.photo}
              alt={person.name}
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginBottom: '1rem',
                background: '#eee'
              }}
            />
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div style={{
                fontWeight: 700,
                fontSize: '0.95rem',
                marginBottom: '0.2rem',
                color: '#1a237e',
                wordBreak: 'break-word',
                whiteSpace: 'normal',
                overflow: 'visible',
                textOverflow: 'clip',
              }}>
                {person.name}
              </div>
              <div style={{
                fontWeight: 500,
                fontSize: '0.75rem',
                color: '#444',
                wordBreak: 'break-word',
                whiteSpace: 'normal',
                overflow: 'visible',
                textOverflow: 'clip',
              }}>
                {person.designation}
              </div>
              {person.designation2 && (
                <div style={{
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  color: '#444',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  overflow: 'visible',
                  textOverflow: 'clip',
                  marginTop: '0.15rem'
                }}>
                  {person.designation2}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#444', textAlign: 'center' }}>
        (Scroll horizontally to see all names and designations. Click anywhere to hide/show both boxes!)
      </div>
    </div>
  );
}

export default Home;
