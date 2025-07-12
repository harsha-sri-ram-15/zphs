import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={{ minHeight: '25px' }}
    >
      <div className="container-fluid">
        {/* Use container-fluid for full width */}
        <div className="d-flex w-100 justify-content-between align-items-center">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              lineHeight: '1.2',
              marginLeft: '20px', // Move school name more to the left
            }}
          >
            ZPHS RAGHUDEVAPURAM
          </Link>
          <div>
            <ul className="navbar-nav flex-row" style={{ marginRight: '20px' }}>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/home"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/achievements"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  Achievements
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/gallery"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/faculty"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  Faculty
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
