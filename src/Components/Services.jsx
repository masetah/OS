import React from 'react';
import {Cell, Grid} from 'react-mdl';
// import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard.jsx';

function Services() {
    return (
        <div className="about-body">
        <Grid className="about-grid">
        <Cell col={12}>
            <div className="Services">
                <h1>Services</h1>
                <div className="Service-cards">
                <ServiceCard
                    title="Irrigation Repair"
                    backgroundURL="sprinker.jpg"
                    description="Let us inspect and repair your existing irrigation system for better efficiency."
                    ServiceLink='/irrigation'
                />
                <ServiceCard
                    title="Mow Service"
                    backgroundURL="green.jpg"
                    description="Your home or business will be the talk of the town with our weekly or biweekly service."
                    ServiceLink='/mow'
                />
                <ServiceCard
                    title="Tree/Shrub Service"
                    backgroundURL="shrub.jpg"
                    description="We'll come out to prune & manicure your trees and shrubs."
                    ServiceLink='/tree'
                />
                <ServiceCard
                    title="Sod Installation"
                    backgroundURL="sod-installation.jpg"
                    description="We will install high grade sod that will grow beautifully for years to come."
                    ServiceLink='/sod'
                />
                <ServiceCard
                    title="Flowerbed Service"
                    backgroundURL="frontyard.jpg"
                    description="Lets increase your curb appeal by cleaning out your overrun flowerbed."
                    ServiceLink='/flower-bed'
                />
                <ServiceCard
                    title="Drainage and Grading"
                    backgroundURL="frenchdrain.jpg"
                    description="Are you seeing puddles in your yard? O&S can drain that swamp in no time."
                    ServiceLink='/drainage'
                />
                {/* <ServiceCard
                    title="Christmas Lighting"
                    backgroundURL="christmas-lights.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/christmas-lights'
                /> */}
                    <ServiceCard
                    title="Junk Removal"
                    backgroundURL="construction-debris.jpg"
                    description="O&S will do the lifting and the hauling so you can enjoy the better things in life."
                    ServiceLink='/junk'
                />
                </div>
            </div>
        </Cell>   
        </Grid> 
        </div>
    );
}

export default Services;