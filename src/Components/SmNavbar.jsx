import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
  import {Link} from 'react-router-dom';

  const SmNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="Navigation"> 
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src="OS-logo.png" alt="OS-Landscaping" height="50px" width="50px" style={{borderRadius:'25%'}}/> </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink ><Link to="/contact" style={{color:'green', fontSize:'large'}}>Contact</Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color:'green', fontSize:'large'}}>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link to="/irrigation" style={{color:'black', fontSize:'large'}}>Irrigation Repair</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/mow" style={{color:'black', fontSize:'large'}}>Mow Service</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/tree" style={{color:'black', fontSize:'large'}}>Tree/Shrub Service</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/sod" style={{color:'black', fontSize:'large'}}>Sod Installation</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/flowerbed" style={{color:'black', fontSize:'large'}}>Flowerbed Service</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/drainage" style={{color:'black', fontSize:'large'}}>Drainage and Grading</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/junk" style={{color:'black', fontSize:'large'}}>Junk/Debris Removal</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText style={{color:'green', fontSize:'large'}}>Serving Dallas and Ellis County</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
    export default SmNavbar;