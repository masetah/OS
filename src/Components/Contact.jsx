import React from 'react';
import {Grid, Cell} from 'react-mdl'
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';

function Contact() {
    return (
        <Grid>
        <Cell col={12}>
            <div className="contact-form">
                <h3>Contact us For a Quote</h3>
                <h5> Free Estimates</h5>
                <Form action='' method="POST">

                <FormGroup row >
                <Col sm={6}>
                <Input type="text" name="name" placeholder="Your Name" />
                </Col>
                <Col sm={6}>
                <Input type="tel" name="phone" placeholder="Your Number" />
                </Col>
                </FormGroup>

                <FormGroup row>
                <Col sm={12}>
                <Input type="email" name="email" placeholder="Your Email" />
                </Col>
                </FormGroup>

                <FormGroup row>
                <Col sm={12}>
                <Input type="select" name="select" id="location" placeholder="Your Location">
                <option disabled>Your Location</option>
                <option>Midlothian, Tx</option>
                <option>Red Oak, Tx</option>
                <option>Ovilla, Tx</option>
                <option>Oak Leaf, Tx</option>
                <option>Pecan Hill, Tx</option>
                <option>Farris, Tx</option>
                <option>Palmer, Tx</option>
                <option>Crisp, Tx</option>
                <option>Ennis, Tx</option>
                <option>Reagor Springs, Tx</option>
                <option>Nash, Tx</option>
                <option>Alma, Tx</option>
                <option>Ike, Tx</option>
                <option>Maypearl, Tx</option>
                <option>Forreston, Tx</option>
                <option>Garrett, Tx</option>
                <option>Waxahachie, Tx</option>
                <option>Bardwell, Tx</option>
                <option>Italy, Tx</option>
                <option>Plum Grove, Tx</option>
                <option>Milford, Tx</option>
                <option>Avalon, Tx</option>
                <option>Rankin, Tx</option>
                <option>Glenn Heights, Tx</option>
                <option>DeSoto, Tx</option>
                <option>Duncanville, Tx</option>
                <option>Lancaster, Tx</option>
                <option>Wilmer, Tx</option>
                <option>Hutchins, Tx</option>
                <option>Cedar Hill, Tx</option>
                <option>South Dallas, Tx</option>
                <option>Other</option>
                </Input>
                </Col>
                </FormGroup>
            
                <FormGroup row>
                <Col sm={12}>
                <Input type="select" name="select" id="service">
                <option>Irrigation Repair</option>
                <option>Mow Service</option>
                <option>Tree Shrub Service</option>
                <option>Sod Installation</option>
                <option>Flowerbed Service</option>
                <option>Drainage & Grading</option>
                <option>Christmas Lighting</option>
                </Input>
                </Col>
                </FormGroup>

                <FormGroup row>
                <Col sm={12}>
                <Input type="textarea" name="text" id="message" placeholder="Tell us More"/>
                </Col>
                </FormGroup>
                
                <Button>Submit</Button>



                </Form>
            </div>   
            </Cell>
        </Grid>
        
    )
}

export default Contact;