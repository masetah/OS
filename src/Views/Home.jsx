import React from 'react';

import Navbar from '../Components/Navbar';
import AboutUs from '../Components/AboutUs';
import Gallery from '../Components/Gallery';
import Contact from '../Components/Contact';
import PageFooter from '../Components/Footer';

function Home() {
  return (
    
    <div className="Home">
      <Navbar/>
      <AboutUs/>
      <Gallery/>
      <Contact/>
      <PageFooter/>
    </div>
  );
}

export default Home;