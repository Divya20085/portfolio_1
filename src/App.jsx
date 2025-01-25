import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/component/Navbar/Navbar'; // Import the Navbar component
import Home from '../src/component/Home/Home';
import About from './component/About/About';
import Project from './component/Projects/Project'
import Icon from './component/icons/SocialIcons';
import Education from './component/Education/edu';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <Router>
      <Navbar />
      <Icon/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
