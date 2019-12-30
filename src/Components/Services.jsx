import React from 'react';
import {Cell, Grid} from 'react-mdl';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="about-body">
        <Grid className="about-grid">
        <Cell col={12}>
            <div className="Services">
                <h3>Services</h3>
                
                <Link to='/irrigation'>
                    <h5 >Irrigation Repair </h5>
                </Link>
                <Link to='/mow'>
                    <h5> Mow Serivice </h5>
                </Link> 
                <Link to='/tree'>
                    <h5 >Tree Service </h5>
                </Link>
                <Link to='/sod'>
                    <h5 >Sod Install </h5>
                </Link>
                <Link to='/flower-bed'>
                    <h5 >Flower Beds</h5>
                </Link>
                <Link to='/drainage'>
                    <h5 >Drainage and Grading</h5>
                </Link> 
                <Link to='/christmas-lights'>
                    <h5 >Christmas Lighting</h5>
                </Link>  
            </div>
        </Cell>   
        </Grid> 
        </div>
    );
}

export default Services;