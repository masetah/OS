import React from 'react';
import {Grid, Cell} from 'react-mdl'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Contact() {
    return (
        <Grid>
        <Cell col={12}>
            <div className="contact-form">
                <h3>Contact us For a Quote</h3>
                <h5> Free Estimates</h5>
                <Form action='' method="POST">

                <FormGroup row >
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                <Input type="text" name="name" placeholder="First & Last" />
                </Col>
                </FormGroup>

                <FormGroup row>
                <Label for="phone" sm={2}>Phone</Label>
                <Col sm={10}>
                <Input type="tel" name="phone" placeholder="000-000-0000" />
                </Col>
                </FormGroup>  

                <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                <Input type="email" name="email" placeholder="Your_Name@company.com" />
                </Col>
                </FormGroup>

                <FormGroup row>
                <Label for="location" sm={2}>Location</Label>
                <Col sm={10}>
                <Input type="select" name="select" id="location">
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
                <Label for="service" sm={2}>Service</Label>
                <Col sm={10}>
                <Input type="select" name="select" id="service">
                <option>Weekly/Bi-Weekly Mow & Trim</option>
                <option>Pavers Install</option>
                <option>Flowerbed Install</option>
                <option>Tree/Shrub maintence</option>
                <option>Irrigation</option>
                </Input>
                </Col>
                </FormGroup>

                <FormGroup row>
                <Label for="message" sm={2}>Tell us more</Label>
                <Col sm={10}>
                <Input type="textarea" name="text" id="message" />
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