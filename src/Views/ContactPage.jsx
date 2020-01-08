import React from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import {Grid, Cell} from 'react-mdl';

function ContactPage() {
  return (
      <div>
        <SmNavbar />
        <Grid className="contact-grid">
            <Cell col={6}>
                <img src="OS-logo.png" alt="OS-Landscaping" height='150px' width='160px' style={{borderRadius:'25%'}}/>
                <p>Est. 2004</p>
                
                <div className='contact-info-div'>
                <h1>Contact Us</h1>
                <div className="social-links">
                    <hr style={{width:'25%'}}/>
                    <a href="tel: 972-268-2450" style={{color:'white', margin:'0'}}><i className="fas fa-phone-square"></i></a>
                    <a href="https://www.facebook.com/OS-Landscaping-123095288286956" style={{color:'white', margin:'0'}}><i className="fab fa-facebook-square"/></a>
                    <a href="mailto:os_landscaping@yahoo.com" style={{color:'white', margin:'0'}}><i className="fas fa-envelope-square"/></a>
                    <hr style={{width:'25%'}}/>
                </div>
                <h5 style={{paddingTop:"10px"}}> Mow Service | Tree Service | Irrigation Repair | Drainage | Sod Install | Free Estimate</h5>

                </div>

            </Cell>
            <Cell col ={6}>
                <Contact/> 
            </Cell>
        </Grid>
        <Footer />
        </div>
  );
}

export default ContactPage;