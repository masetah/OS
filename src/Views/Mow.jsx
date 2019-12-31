import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

function Mow() {
  return (
    
    <div className="Mow">
        <SmNavbar />
        <h1>Mow Service</h1>
        <Contact/>
        <Footer />
    </div>
  );
}

export default Mow;