import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Services from '../Components/Services';

function Residential() {
  return (
    
    <div className="Commercial">
        <SmNavbar />
        <h1>Residential Information Page</h1>
        <Services/>
        <Contact/>
        <Footer />
    </div>
  );
}

export default Residential;