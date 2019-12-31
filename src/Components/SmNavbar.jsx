import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
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
              <Link to="/commercial">Commercial</Link>
            </NavItem>
            <NavItem>
              <Link to="/residential">Residential</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact"> Contact </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
    export default SmNavbar;