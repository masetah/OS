import React, {Component} from 'react';
import {
    Card, 
    CardTitle, 
    CardActions,
    CardText, 
    CardMenu } from 'react-mdl';
    import { Link } from 'react-router-dom';

class ServiceCard extends Component {
    render() {
        return (
            <div className="service-card">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'35px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: `url(${this.props.backgroundURL}) center / cover` }}></CardTitle>
                        <div className="service-card-text">
                        <CardText>
                        <h5 style={{color:'black'}}>{this.props.title}</h5>
                        {this.props.description}
                        </CardText>
                        </div>
                        <CardActions border>
                        <Link to={this.props.ServiceLink}> More info </Link>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                        </CardMenu>                    
                    </Card>
            </div>
        )
    }

}

export default ServiceCard;