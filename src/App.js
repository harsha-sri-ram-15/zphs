import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Faculty from './components/Faculty';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Navbar />
                <div className="container mt-4">
                  <Home />
                </div>
              </Layout>
            }
          />
          <Route
            path="/achievements"
            element={
              <Layout>
                <Navbar />
                <div className="container mt-4">
                  <Achievements />
                </div>
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <Navbar />
                <div className="container mt-4">
                  <Gallery />
                </div>
              </Layout>
            }
          />
          <Route
            path="/faculty"
            element={
              <Layout>
                <Navbar />
                <div className="container mt-4">
                  <Faculty />
                </div>
              </Layout>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}


export default App;
