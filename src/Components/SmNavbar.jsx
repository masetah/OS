import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';


function SmNavbar() {
    return (
        <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<a href="/" style={{color:'white'}}><span><strong>Home</strong></span></a>}>
            <Navigation>
                <a href="/services">Services</a>
                <a href="/services/mow">Mow</a>
                <a href="/services/tree">Tree</a>
                <a href="/services/irrigation">Irrigation</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        )
    }
    
    export default SmNavbar;