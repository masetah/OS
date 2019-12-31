import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

function Tree() {
  return (
    
    <div className="Tree">
        <SmNavbar />
        <h1>Tree Service</h1>
        <ServiceCard
                    title="Tree/Shrub Service"
                    backgroundURL="shrub.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/tree'
                />
        <Contact />
        <Footer />
    </div>
  );
}

export default Tree;