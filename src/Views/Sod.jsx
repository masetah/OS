import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

function Sod() {
  return (
    
    <div className="Sod">
        <SmNavbar />
        <h1>Sod Install</h1>
        <ServiceCard
                    title="Sod Installation"
                    backgroundURL="sod-installation.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/sod'
                />
        <Contact/>
        <Footer />
    </div>
  );
}

export default Sod;