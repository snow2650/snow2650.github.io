import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Cars from './Pages/Cars';
import Games from './Pages/Games';
import Projects from './Pages/Projects';
import Diary from './Pages/Diary';
import AboutMe from './Pages/AboutMe';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};
console.log('home page here')
export default App;