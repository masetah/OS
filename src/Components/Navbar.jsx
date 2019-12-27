import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Navbar() {
    return (
        <div style={{height: '720px', position: 'relative'}}>
    <Layout style={{background:'url(https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80) center / cover'}}>
        <Header title="Dallas/ Ft. Worth" style={{color: 'white', background: 'black'}}>
            <Navigation>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{color:'white'}} nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/services/irrigation'>Irrigation Service</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/services/mow'>Mow Service</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/services/tree'>Tree Service</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
                <a href="tel:972-268-2450">(972) 268-2450</a>
            </Navigation>
        </Header>
        <Drawer  title="O&S Landscaping">
            <Navigation>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Social Media</a>
                <a href="#">Contact</a>
            </Navigation>
        </Drawer>
        <img className='logo' src='OS-logo.png' alt='OS logo' height='200px' width=' 225px'/>
        <div className='info-div'>
            <h4> Commercial and Residential Landscaping Service Since 1994</h4>
            <hr/>
            <h5 style={{paddingTop:"20px"}} > Irrigation Repair | Tree Service | Free Estimate</h5>
            </div>
            <div className="social-links">
                <a href="tel: 972-268-2450" style={{color:'white', margin:'0'}}><i className="fas fa-phone-square"></i></a>
                <a href="https://www.facebook.com/OS-Landscaping-123095288286956" style={{color:'white', margin:'0'}}><i className="fab fa-facebook-square"/></a>
                <a href="mailto:os_landscaping@yahoo.com" style={{color:'white', margin:'0'}}><i className="fas fa-envelope-square"/></a>
            </div>
        <Content />
    </Layout>
</div>    
    )
}

export default Navbar;