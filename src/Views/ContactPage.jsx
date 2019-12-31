import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';

function ContactPage() {
  return (
    
    <div className="Commercial-page">
        <SmNavbar />
        <div className="Contact-page">
        <h1>Contact  Page</h1>
        <Contact/>    
        </div>
        <Footer />
    </div>
  );
}

export default ContactPage;