import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, 
  NavLink } from 'reactstrap';
  import {Link} from 'react-router-dom';

  const SmNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div className="navBar">
         <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/commercial">Commercial</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/residential">Residential</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="/contact">Contact</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
    export default SmNavbar;