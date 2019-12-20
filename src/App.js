import React from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
// import Mowing from './Mowing';
import Gallery from './Gallery';
import Contact from './Contact';
import PageFooter from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutUs/>
      {/* <Mowing/> */}
      <Gallery/>
      <Contact/>
      <PageFooter/>

    </div>
  );
}

export default App;
