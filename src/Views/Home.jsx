import React from 'react';

import Navbar from '../Components/Navbar';
import AboutUs from '../Components/AboutUs';
import Services from '../Components/Services';
import Gallery from '../Components/Gallery';
import Contact from '../Components/Contact';
import PageFooter from '../Components/Footer';


function Home() {
  return (
    
    <div className="Home">
      <Navbar/>
      <AboutUs/>
      <Services/>
      <Gallery/>
      <div className='home-contact-div'>
      <Contact/>
      </div>
      
      <PageFooter/>
    </div>
  );
}

export default Home;