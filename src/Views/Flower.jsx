import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

function Flower() {
  return (
    
    <div className="Flower">
        <SmNavbar />
        <h1>Flower Bed Cleanout and Design</h1>
        <ServiceCard
                    title="Flowerbed Service"
                    backgroundURL="frontyard.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/flower-bed'
                />
        <Contact/>
        <Footer />
    </div>
  );
}

export default Flower;