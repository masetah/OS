import React, {Component} from 'react';

class ServiceContent extends Component {
    render() {
        return (
            <div className="service-content">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.description}</h3>
                    <h5>{this.props.expectation}</h5>
                </div>
        );
    }
}

export default ServiceContent;