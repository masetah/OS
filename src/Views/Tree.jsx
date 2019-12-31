import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

function Tree() {
  return (
    
    <div className="Tree">
        <SmNavbar />
        <h1>Tree Service</h1>
        <Contact />
        <Footer />
    </div>
  );
}

export default Tree;