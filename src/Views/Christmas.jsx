import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

function Christmas() {
  return (
    
    <div className="Christmas">
        <SmNavbar />
        <h1>Christmas Lighting</h1>
        <ServiceCard
                    title="Christmas Lighting"
                    backgroundURL="christmas-lights.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/christmas-lights'
                />
        <Contact/>
        <Footer />
    </div>
  );
}

export default Christmas;