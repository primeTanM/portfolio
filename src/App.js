import './App.css';
import React from 'react';
import Navbar from './pages/Navbar/Navbar';
import AnimatedRoutes from './AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
