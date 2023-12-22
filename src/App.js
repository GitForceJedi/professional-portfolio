// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import WorkHistory from './components/WorkHistory';
import Skills from './components/Skills';
import Index from './components/Index';
import Contact from './components/Contact';
import './App.css'; // Global styles

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
