import React, {Component} from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
       
    };
}

componentDidMount() {
    window.scrollTo(0, 0);
}
render(){
  return (
    
    <div className="Tree">
        <SmNavbar />
        <h1>Tree Service</h1>
        <ServiceCard
                    title="Tree/Shrub Service"
                    backgroundURL="shrub.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/tree'
                />
        <Contact />
        <Footer />
    </div>
  );
}
}

export default Tree;