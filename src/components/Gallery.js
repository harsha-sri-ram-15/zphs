import React, { useState, useEffect } from 'react';

// Update these with your actual image filenames and descriptions
const images = [
  {
    src: '/images/ssc_results2425.jpg',
    alt: 'SSC 24-25 Results Celebrations',
    description: 'Secured Mandal 1st and 3rd positions in SSC 2024-25',
  },
  {
    src: '/images/dist_scfair_2324.jpg',
    alt: 'Selected to State Level Science Fair',
    description: 'Selected to State Level Science Fair 2023-24',
  },
  {
    src: '/images/mathsday_2324.jpg',
    alt: 'Maths day',
    description: 'Maths Day Celebrations 2023-24',
  },
  {
    src: '/images/ssc_results2324.jpg',
    alt: 'ssc results 2023',
    description: 'Secured Mandal 1st position in SSC 2023-24',
  },
  {
    src: '/images/tlm.jpg',
    alt: 'tlm',
    description: 'TLM exhibition 2024-25',
  },
  {
    src: '/images/delhi15.jpg',
    alt: 'delhi',
    description: 'Attended 75th Independence Day celebrations at Red Fort as a special guest',
  },
  {
    src: '/images/ambani_2324.jpg',
    alt: 'ambani 22324',
    description: 'Secured 3rd position in Reliance Quiz 2023-24',
  },
  {
    src: '/images/koushal_2425.jpg',
    alt: 'koushal 2425',
    description: 'Participated in Koushal Competition, 2024',
  },
  {
    src: '/images/koushal_st2.jpg',
    alt: 'koushal 2425',
    description: 'Secured state 2nd in Poster presentation, Koushal Competition 2024',
  },
  {
    src: '/images/scoutsguides.jpg',
    alt: 'scouts 2425',
    description: 'Established Scouts and Guides in Academic year 2025',
  },
  {
    src: '/images/ambani_2425.jpg',
    alt: 'ambani 2425',
    description: 'Secured 3rd place in Reliance Quiz 2024-25',
  },
  {
    src: '/images/ssc_toppers.jpg',
    alt: 'ssc 2425',
    description: 'Students, who secured above 500 marks in SSC 2024-25 (23 in total)',
  },
  {
    src: '/images/koushal_2324.jpg',
    alt: 'koushal 2324',
    description: 'Participated in Dist. Level Koushal Quiz Competition 2023-24',
  },
  {
    src: '/images/yoga.jpg',
    alt: 'yoga',
    description: 'Participated in Yogandhra 2025',
  },
  {
    src: '/images/eemt.jpg',
    alt: 'eemt',
    description: 'Secured District 1st in EEMT 2023-24',
  },
  {
    src: '/images/diary.jpg',
    alt: 'diary',
    description: 'School diary inaugaration by Dy.E.O sir',
  },
  {
    src: '/images/idcard.jpg',
    alt: 'idcard',
    description: 'ID card distribution by D.E.O sir',
  },
  {
    src: '/images/inspire.jpg',
    alt: 'inspire',
    description: 'Participated at National level Inspire Manak Competition at Delhi 2024-25',
  },
  {
    src: '/images/collector.jpg',
    alt: 'collector',
    description: 'District Collecter madam appreciation  INSPIRE MANAK project selected to NATIONAL level',
  },
  {
    src: '/images/rjd.jpg',
    alt: 'rjd',
    description: 'RJD madam with our scouts and guides',
  },
  {
    src: '/images/deoscoutsguides.jpg',
    alt: 'deoscoutsguides',
    description: 'DEO sir with our scouts and guides',
  },
  {
    src: '/images/megaptmprize.jpg',
    alt: 'megaptmprize',
    description: 'Rajanagaram constituiency MLA sir prize distribution on Mega PTM.2.0',
  },
  {
    src: '/images/nationalization.jpg',
    alt: 'nationalization',
    description: 'Nationalization of PMShri zpphs Raghudevapuram school by RUDA chairman sri B Venkata Ramana Choudhary',
  },
  {
    src: '/images/jcmla.jpg',
    alt: 'jcmla',
    description: 'MLA sir and Joint Collector attended to MEGA PTM 2.0',
  },
  {
    src: '/images/dcmpkproject.jpg',
    alt: 'dcmpkproject',
    description: 'Deputy CM Pawan Kalyan sir appreciated our ATL project on the eve of opening of Science Hub at Rajahmundry',
  },
  


  // Add more images as needed
];

function Gallery() {
  const [current, setCurrent] = useState(0);

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Automatically move to next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        className="card"
        style={{
          width: '1100px', // Wider box
          minHeight: '420px', // Reduced height for less vertical space
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
          background: 'rgba(255, 236, 179, 0.92)',
          borderRadius: '18px',
          padding: '2.5rem 2rem',
          marginBottom: '80px',
        }}
      >
        <h2
          style={{
            fontSize: '2.3rem',
            marginBottom: '2rem',
            fontWeight: 700,
            color: '#1a237e',
            textAlign: 'center',
            letterSpacing: '1px',
          }}
        >
          Events Gallery
        </h2>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}>
          <button
            onClick={goToPrevious}
            aria-label="Previous image"
            style={{
              background: '#1976d2',
              color: '#fff',
              border: 'none',
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              marginRight: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            &#8592;
          </button>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '600px',
            }}
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              style={{
                width: '540px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            />
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.35rem', fontWeight: 500, color: '#1a237e' }}>
                {images[current].description}
              </p>
              <span style={{ fontSize: '1.1rem', color: '#444' }}>
                {current + 1} / {images.length}
              </span>
            </div>
          </div>

          <button
            onClick={goToNext}
            aria-label="Next image"
            style={{
              background: '#1976d2',
              color: '#fff',
              border: 'none',
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              marginLeft: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
