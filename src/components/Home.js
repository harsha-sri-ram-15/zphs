import React, { useEffect } from "react";

const Home = () => {
  // fallback SVG (used when an image is missing)
  const fallbackSvg =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
         <rect width="100%" height="100%" fill="#eeeeee"/>
         <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12" fill="#666">No Image</text>
       </svg>`
    );

  // Sets the background image to the body for full coverage
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = "url('/images/school_bg.jpg') center center / cover no-repeat fixed";
    document.body.style.minHeight = "100vh";
    document.body.style.width = "100%";
    // Clean up: Restore previous background when unmounting
    return () => {
      document.body.style.background = prev;
      document.body.style.minHeight = "";
      document.body.style.width = "";
    };
  }, []);

  const persons = [
    {
      name: "Sri N. Chandrababu Naidu",
      designation: "Hon'ble Chief Minister,",
      designation2: "Government of Andhra Pradesh",
      photo: "/images/cbn_pic.jpg",
    },
    {
      name: "Sri K. Pawan Kalyan",
      designation: "Hon'ble Deputy Chief Minister,",
      designation2: "Government of Andhra Pradesh",
      photo: "/images/pk_pic.jpg",
    },
    {
      name: "Sri Nara Lokesh",
      designation: "Hon'ble Education Minister,",
      designation2: "Government of Andhra Pradesh",
      photo: "/images/lokesh_pic.jpg",
    },
    {
      name: "Sri B. Srininivasa Rao",
      designation: "State project director samagra siksha,",
      designation2: "Government of Andhra Pradesh",
      photo: "/images/srinivas_rao.jpg",
    },
    {
      name: "Sri V. Vijaya Ram Raju",
      designation: "Director of School Education Department,",
      designation2: "Government of Andhra Pradesh",
      photo: "/images/director_pic.jpg",
    },
    {
      name: "Smt S.Subhashini",
      designation: "Additional project Co ordinator SS,",
      designation2: "EAST GODAVARI",
      photo: "/images/subhashini.jpg",
    },
    {
      name: "Sri K. Vasudeva Rao",
      designation: "District Educational Officer,",
      designation2: "East Godavari",
      photo: "/images/deo_pic.jpeg",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", padding: "2rem 1rem", width: "100%", boxSizing: "border-box" }}>
      {/* Greeting Box */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 2rem auto",
          padding: "2rem",
          textAlign: "left",
          background: "rgba(255, 235, 170, 0.95)",
          borderRadius: "18px",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a237e" }}>
          Greetings!!
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#333" }}>
          We are delighted to welcome you to our school website.
          <br />
          Explore our vibrant learning community and discover what makes us unique.
          <br />
          We look forward to sharing our achievements and memorable events with you.
        </p>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1a237e" }}>
          About Us
        </h3>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#333" }}>
          At ZPHS Raghudevapuram, we are proud of our students’ accomplishments
          and the vibrant events that shape our school life. To see our proudest
          moments, visit the <b>Achievements</b> page. For photos and memories,
          check out our <b>Gallery</b> page.
        </p>
      </div>

      {/* Persons Grid */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(255, 235, 170, 0.95)",
          borderRadius: "18px",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {persons.map((person, idx) => {
            const isLastSingle =
              idx === persons.length - 1 && persons.length % 3 === 1;
            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "14px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
                  padding: "1.2rem",
                  width: "220px",
                  height: "240px",
                  justifyContent: "flex-start",
                  gridColumn: isLastSingle ? "2 / span 1" : "auto",
                }}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackSvg;
                  }}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginBottom: "1rem",
                    display: "block",
                    background: "#eee",
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.4rem",
                      color: "#1a237e",
                    }}
                  >
                    {person.name}
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: "0.85rem",
                      color: "#444",
                    }}
                  >
                    {person.designation}
                  </div>
                  {person.designation2 && (
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        color: "#444",
                        marginTop: "0.25rem",
                      }}
                    >
                      {person.designation2}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
