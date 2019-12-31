import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

function Irrigation() {
  return (
    
    <div className="Irrigation">
        <SmNavbar />
        <h1>Irrigation Service</h1>
        <ServiceCard
                    title="Irrigation Repair"
                    backgroundURL="sprinker.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/irrigation'
                />
        <Contact/>
        <Footer />
    </div>
  );
}

export default Irrigation;