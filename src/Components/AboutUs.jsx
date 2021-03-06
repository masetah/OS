import React from 'react';
import {Cell, Grid} from 'react-mdl';

function AboutUs() {
    return (
        <div className="about-body">
        <Grid className="about-grid">
        <Cell col={6}>
            <div className="about-image">
                <img src='about.jpg' alt='about' height='80%' width="80%"></img>
                <p>Shrub trimming and flowerbed maintenance.</p>
            </div>
        </Cell>   
        <Cell col={6}>
           <div className="about-us">
                <h1>About Us</h1>
                <h5 style={{marginTop:'10px'}}>Our 15 years of experience means you will get hassle free service with great results. We specialize in beautifying and creating curb appeal for any home or 
                business. When you choose O&S your guests will get that wow factor when walking up!
                </h5>
                <hr/>
                <div className='mower-div' style={{height:'275px', width:'90%', background: 'url(green-mower.jpg)top / cover' }}></div>
                {/* <img src="./rider-mower.png" alt="lawn mower" height="50%" width="50%" style={{paddingLeft:'20px'}}/> */}


            </div>
        </Cell>
        </Grid> 
        </div>

   
    )
}

export default AboutUs;