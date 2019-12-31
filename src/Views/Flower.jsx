import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

function Flower() {
  return (
    
    <div className="Flower">
        <SmNavbar />
        <h1>Flower Bed Cleanout and Design</h1>
        <Contact/>
        <Footer />
    </div>
  );
}

export default Flower;