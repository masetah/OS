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
            <React.Fragment>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom:'35px'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: `url(${this.props.backgroundURL}) center / cover` }}></CardTitle>
                        <CardText>
                        <h5>{this.props.title}</h5>
                        {this.props.description}
                        </CardText>
                        <CardActions border>
                        <Link to={this.props.ServiceLink}> More info </Link>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                        </CardMenu>                    
                    </Card>
            </React.Fragment>
        )
    }

}

export default ServiceCard;