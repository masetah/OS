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
                <h3>Services</h3>
                <div className="Service-cards">
                <ServiceCard
                    title="Irrigation Repair"
                    backgroundURL="sprinker.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/irrigation'
                />
                <ServiceCard
                    title="Mow Service"
                    backgroundURL="green.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/mow'
                />
                <ServiceCard
                    title="Tree/Shrub Service"
                    backgroundURL="shrub.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/tree'
                />
                <ServiceCard
                    title="Sod Installation"
                    backgroundURL="sod-installation.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/sod'
                />
                <ServiceCard
                    title="Flowerbed Service"
                    backgroundURL="frontyard.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/flower-bed'
                />
                <ServiceCard
                    title="Drainage and Grading"
                    backgroundURL="frenchdrain.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/drainage'
                />
                <ServiceCard
                    title="Christmas Lighting"
                    backgroundURL="christmas-lights.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/christmas-lights'
                />
                </div>
            </div>
        </Cell>   
        </Grid> 
        </div>
    );
}

export default Services;