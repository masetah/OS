import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
function Navbar() {
    return (
        <div style={{height: '600px', position: 'relative'}}>
    <Layout style={{background:'url(https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80) center / cover'}}>
        <Header transparent title="Dallas/ Ft. Worth" style={{color: 'white'}}>
            <Navigation>
                {/* <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a> */}
                <a href="tel:972-268-2450">(972) 268-2450</a>
            </Navigation>
        </Header>
        <Drawer  title="O&S">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <img className='logo' src='OS-logo.png' alt='logo' height='200 px' width=' 225px'/>
        <div className='info-div'>
            <h4> Commercial and Residiential Landscaping Service Since 1994</h4>
            <hr/>
            <div className="social-links">
                <a href="tel: 972-268-2450" style={{color:'white', margin:'0'}}><i className="fas fa-phone-square"></i></a>
                <a href="https://www.facebook.com/OS-Landscaping-123095288286956" style={{color:'white', margin:'0'}}><i className="fab fa-facebook-square"/></a>
                <a href="mailto:masetaherian@gmail.com" style={{color:'white', margin:'0'}}><i className="fas fa-envelope-square"/></a>
            </div>

        </div>
        <Content />
    </Layout>
</div>    
    )
}

export default Navbar;