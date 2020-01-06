import React, {Component} from 'react';
import SmNavbar from './SmNavbar.jsx';

class Navbar extends Component {
    render(){
        return (
            <div>
            <SmNavbar />
            <div className = "banner">
            <img className='logo' src='OS-logo.png' alt='OS logo' />
            <div className='info-div'>
                <h4> Offering Commercial and Residential Services to Ellis County and Dallas Since 2004.</h4>
                {/* <hr/> */}
                <div className="social-links">
                    <hr style={{width:'25%'}}/>
                    <a href="tel: 972-268-2450" style={{color:'white', margin:'0'}}><i className="fas fa-phone-square"></i></a>
                    <a href="https://www.facebook.com/OS-Landscaping-123095288286956" style={{color:'white', margin:'0'}}><i className="fab fa-facebook-square"/></a>
                    <a href="mailto:os_landscaping@yahoo.com" style={{color:'white', margin:'0'}}><i className="fas fa-envelope-square"/></a>
                    <hr style={{width:'25%'}}/>
                </div>
                <h5 style={{paddingTop:"10px"}}> Mow Service | Tree Service | Irrigation Repair | Drainage | Sod Install | Free Estimate</h5>

                </div>

            </div>
            </div>    
        );
    }
   
}

export default Navbar;