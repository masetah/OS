import React from 'react';
import {Cell, Grid} from 'react-mdl';
function AboutUs() {
    return (
        <div className="about-comp">
        <Grid>
        <Cell col={1}></Cell>
        <Cell col={5}>
            <div className="about-image">
                <img src='about.jpg' alt='about' height='400px' width="400px"></img>
                <p>Shrub trimming and flowerbed mainanence.</p>
            </div>
        </Cell>   
        <Cell col={5}>
           <div className="about-us">
                <h1>About Us</h1>
                <p style={{marginTop:'50px'}}>Our 25 years of experience means you will get hassle free service with great results. We specialize in beautifying and creating curb appeal for any home or 
                business. When you choose O&S your guests will get that wow factor when walking up!
                </p>
                <hr/>
                <h3>Services</h3>
                <h5>Mow Service | Tree and Shrub Trimming | Flowerbed Installation</h5>
                
            </div>
        </Cell>
        <Cell col={1}></Cell>
        </Grid> 
        </div>

   
    )
}

export default AboutUs;