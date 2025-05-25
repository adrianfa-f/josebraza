import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/About';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/sostenibilidad" element={<Sustainability />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
    </Router>
  );
}

export default App;
