import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Blog from './pages/Blogs/Blog';
import React from 'react';
import Connect from './pages/Connect/Connect';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/blogs" element={<Blog />} />
          <Route exact path="/contact" element={<Connect />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
