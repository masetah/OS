import React from 'react';
import {Cell, Grid} from 'react-mdl';
import {Link} from 'react-router-dom';

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
                <img src="./rider-mower.png" alt="lawn mower" height="50%" width="50%" style={{paddingLeft:'20px'}}/>
                <h1>About Us</h1>
                <h5 style={{marginTop:'10px'}}>Our 15 years of experience means you will get hassle free service with great results. We specialize in beautifying and creating curb appeal for any home or 
                business. When you choose O&S your guests will get that wow factor when walking up!
                </h5>
                <hr/>
                <h3>Services</h3>
                
                <Link to='/services/irrigation'>
                    <h5 >Irrigation Repair </h5>
                </Link>
                <Link to='/services/mow'>
                    <h5> Mow Serivice </h5>
                </Link> 
                <Link to='/services/tree'>
                    <h5 >Tree Service </h5>
                </Link>
                <Link to='/services/sod'>
                    <h5 >Sod Install </h5>
                </Link>
                <Link to='/services/flower-bed'>
                    <h5 >Flower Beds</h5>
                </Link>
                <Link to='/services/drainage'>
                    <h5 >Drainage and Grading</h5>
                </Link> 
                <Link to='/services/christmas-lights'>
                    <h5 >Christmas Lighting</h5>
                </Link>  

            </div>
        </Cell>
        </Grid> 
        </div>

   
    )
}

export default AboutUs;