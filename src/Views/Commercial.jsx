import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Services from '../Components/Services';

function Commercial() {
  return (
    
    <div className="Commercial-page">
        <SmNavbar />
        <div className="Commercial-content">
        <h1>Commercial Information Page</h1> 
        <Services />
        <Contact/>   
        </div>
        <Footer />
    </div>
  );
}

export default Commercial;