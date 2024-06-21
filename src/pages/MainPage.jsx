import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Components/Header';
import HomePage from '../Components/HomePage';
import About from '../Components/Abouts';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='o-nama' element={<About />} />
            <Route path='usluge' element={<Services />} />
            <Route path='kontakt' element={<Contact />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default MainPage;
