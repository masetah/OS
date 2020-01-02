import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Services from '../Components/Services';

function ServicePage() {
  return (
    
    <div className="Service-page">
        <SmNavbar />
        <h1>Service Information Page</h1>
        <Services/>
        <Contact/>
        <Footer />
    </div>
  );
}

export default ServicePage;