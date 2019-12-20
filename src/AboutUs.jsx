import React from 'react';
import {Cell, Grid} from 'react-mdl';
function AboutUs() {
    return (
        <div className="about-body">
        <Grid className="about-grid">
        <Cell col={6}>
            <div className="about-image">
                <img src='about.jpg' alt='about' height='80%' width="80%"></img>
                <p>Shrub trimming and flowerbed mainanence.</p>
            </div>
        </Cell>   
        <Cell col={6}>
           <div className="about-us">
                <h1>About Us</h1>
                <h5 style={{marginTop:'20px'}}>Our 25 years of experience means you will get hassle free service with great results. We specialize in beautifying and creating curb appeal for any home or 
                business. When you choose O&S your guests will get that wow factor when walking up!
                </h5>
                <hr/>
                <h3>Services</h3>
                <h5>Mow Service | Tree and Shrub Trimming | Flowerbed Installation</h5>
                <img src="./lawn-mower.png" alt="lawn mower" height="60%" width="60%"/>
                
            </div>
        </Cell>
        </Grid> 
        </div>

   
    )
}

export default AboutUs;