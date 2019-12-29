import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function SmNavbar() {
    return (
        <div style={{height: '60px', position: 'relative'}}>
    <Layout fixedHeader >
        <Header style={{background:'black'}} title={<Link to="/" style={{color:'white'}}><span><strong>Home</strong></span></Link>}>
            <Navigation>
                <Link to="/services/commercial">Commercial</Link>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{color:'white'}} nav caret>
                Services
                </DropdownToggle>
                <DropdownMenu right>

                <DropdownItem>
                <Link to="/services/mow">Mow Service</Link>
                </DropdownItem>

                <DropdownItem>
                <Link to="/services/tree">Tree Service</Link>
                </DropdownItem>

                <DropdownItem>
                <Link to="/services/irrigation">Irrigation Repair</Link>
                </DropdownItem>

                <DropdownItem>
                <Link to="/services/sod">Sod Installation</Link>
                </DropdownItem>

                <DropdownItem>
                <Link to="/services/flower-bed">Flower Bed Maintenance/Design</Link>
                </DropdownItem>

                <DropdownItem>
                <Link to="/services/drainage">Drainage and Grading</Link>
                </DropdownItem>

                <DropdownItem>
                <Link to="/services/christmas-lights">Cristmas Lights</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <a href="tel:972-268-2450">(972) 268-2450</a>  
            </Navigation>
        </Header>
        <Drawer title="Services">
            <Navigation>
            <Link to="/services/commercial">Commercial</Link>
                <Link to="/services/mow">Mow</Link>
                <Link to="/services/tree">Tree</Link>
                <Link to="/services/irrigation">Irrigation</Link>
                <Link to="/services/sod">Commercial</Link>
                <Link to="/services/flower-bed">Flower Beds</Link>
                <Link to="/services/drainage">Drainage</Link>
                <Link to="/services/christmas-lights">Cristmas Lights</Link>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        )
    }
    
    export default SmNavbar;