import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/component/Navbar/Navbar'; // Import the Navbar component
import Home from '../src/component/Home/Home';
import About from './component/About/About';
import Project from './component/Projects/Project'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </Router>
  );
}

export default App;
