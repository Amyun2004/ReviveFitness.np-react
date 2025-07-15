import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ContactPage from './Pages/Contact';
import Programs from './Pages/Programs';
import AboutPage from './Pages/AboutPage';
import Home from './Pages/Home';
import LoginPage from './components/LoginPage/login.jsx';
import AdminLoginPage from './components/LoginPage/AdminLogin';
import Signup from './components/LoginPage/SignupReviveFitness';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;