import React from 'react';

const facultyList = [
  // First row: Head Mistress
  {
    name: 'Mrs. M. Syamala Devi',
    designation: 'GHM Raghudevapuram',
    bio: 'Leading the school with dedication and vision.',
    photo: '/images/ghm_pic.jpg',
  },
  // Next 17 faculty members
  {
    name: 'Mr. G. Shekar',
    designation: 'SA, PS Teacher',
    bio: 'Passionate about science and innovation.',
    photo: '/images/shekar_pic.jpg',
  },
  {
    name: 'Mrs. MM Sirisha',
    designation: 'SA, Maths Teacher',
    bio: 'Expert in mathematics and student mentoring.',
    photo: '/images/sirisha_pic.jpg',
  },
  {
    name: 'Mrs. V Padmavathi',
    designation: 'SA, Maths Teacher',
    bio: 'Expert in mathematics and student mentoring.',
    photo: '/images/padmavathi_pic.jpg',
  },
  {
    name: 'Mr. M Appala Raju',
    designation: 'SA, PS Teacher',
    bio: 'Passionate about science and innovation.',
    photo: '/images/appalaraju_pic.jpg',
  },
  {
    name: 'Mr. V Rambabu',
    designation: 'SA, English Teacher',
    bio: 'Inspiring students in language and literature.',
    photo: '/images/rambabu_pic.jpg',
  },
  {
    name: 'Mrs. Y Mangalakshmi',
    designation: 'SA, BS Teacher',
    bio: 'Cultivating curiosity in life sciences.',
    photo: '/images/mangalakshmi_pic.jpg',
  },
  {
    name: 'Mrs. Ch Lilly Mary',
    designation: 'SA, Telugu Teacher',
    bio: 'Inspiring Telugu language excellence.',
    photo: '/images/lilymary_pic.jpg',
  },
  {
    name: 'Mr. S Ramakrishna',
    designation: 'SA, English Teacher',
    bio: 'Inspiring students in language and literature.',
    photo: '/images/srk_pic.jpg',
  },
  {
    name: 'Mrs. T Ammaji',
    designation: 'SA, SS Teacher',
    bio: 'Exploring society and history.',
    photo: '/images/ammaji_pic.jpg',
  },

  {
    name: 'Mrs. B Ramadevi',
    designation: 'SA, Hindi Teacher',
    bio: 'Fostering Hindi language learning.',
    photo: '/images/ramadevi_pic.jpg',
  },
  {
    name: 'Mrs. S S Eswari',
    designation: 'SA, Maths Teacher',
    bio: 'Expert in mathematics and student mentoring.',
    photo: '/images/subramanyeswari_pic.jpg',
  },
  {
    name: 'Mrs. SS Gayatri Devi',
    designation: 'SA, Telugu Teacher',
    bio: 'Inspiring Telugu language excellence.',
    photo: '/images/gayatridevi_pic.jpg',
  },
  {
    name: 'Mr. B Kama Raju',
    designation: 'SA, SS Teacher',
    bio: 'Exploring society and history.',
    photo: '/images/kamaraju_pic.jpg',
  },
  {
    name: 'Mr. K V N Rao',
    designation: 'SA, Spl. Education',
    bio: 'Inspiring inclusive education.',
    photo: '/images/knr_pic.jpg',
  },
  {
    name: 'Mrs. M Sita Devi',
    designation: 'SA, BS Teacher',
    bio: 'Cultivating curiosity in life sciences.',
    photo: '/images/sithadevi_pic.jpg',
  },
  {
    name: 'Mrs. R V N Lakshmi',
    designation: 'SA, Hindi Teacher',
    bio: 'Fostering Hindi language learning.',
    photo: '/images/nagalakshmi_pic.jpg',
  },
];

function Faculty() {
  // First row: Head Mistress
  const headMistress = facultyList[0];
  // Remaining 17 faculty, grouped by 3 per row
  const facultyRows = [];
  for (let i = 1; i < facultyList.length; i += 3) {
    facultyRows.push(facultyList.slice(i, i + 3));
  }

  return (
    <section
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '1100px',
          background: 'rgba(255, 236, 179, 0.96)',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '40px auto 0 auto',
          marginBottom: '120px',
        }}
      >
        <h2
          style={{
            fontSize: '2.3rem',
            marginBottom: '2.2rem',
            fontWeight: 700,
            color: '#1a237e',
            textAlign: 'center',
            letterSpacing: '1px',
          }}
        >
          Our Faculty
        </h2>

        {/* First row: Head Mistress only */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: '2.5rem',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.82)',
              borderRadius: '14px',
              boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
              padding: '1.2rem 1.2rem',
              width: '220px',
              minWidth: '220px',
              maxWidth: '220px',
              height: '240px',
              boxSizing: 'border-box',
              justifyContent: 'flex-start',
              marginBottom: 0,
              flexShrink: 0,
              overflow: 'hidden',
            }}
          >
            <img
              src={headMistress.photo}
              alt={headMistress.name}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginBottom: '1rem',
                background: '#eee',
              }}
            />
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginBottom: '0.2rem',
                  color: '#1a237e',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {headMistress.name}
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: '0.97rem',
                  color: '#444',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {headMistress.designation}
              </div>
              <div
                style={{
                  fontSize: '0.93rem',
                  marginTop: '0.4rem',
                  color: '#333',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                }}
              >
                {headMistress.bio}
              </div>
            </div>
          </div>
        </div>

        {/* Next rows: 3 faculty per row */}
        {facultyRows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '2.2rem',
              width: '100%',
              marginBottom: '2.2rem',
            }}
          >
            {row.map((faculty, idx) => (
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
                  width: '220px',
                  minWidth: '220px',
                  maxWidth: '220px',
                  height: '240px',
                  boxSizing: 'border-box',
                  justifyContent: 'flex-start',
                  marginBottom: 0,
                  flexShrink: 0,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={faculty.photo}
                  alt={faculty.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    marginBottom: '1rem',
                    background: '#eee',
                  }}
                />
                <div style={{ textAlign: 'center', width: '100%' }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '1.08rem',
                      marginBottom: '0.2rem',
                      color: '#1a237e',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {faculty.name}
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: '0.97rem',
                      color: '#444',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {faculty.designation}
                  </div>
                  <div
                    style={{
                      fontSize: '0.93rem',
                      marginTop: '0.4rem',
                      color: '#333',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                    }}
                  >
                    {faculty.bio}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculty;
