import React, {Component} from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

class Drainage extends Component {
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
    
    <div className="Drainage">
        <SmNavbar />
        <h1>Drainage and Grading</h1>
        <ServiceCard
                    title="Drainage and Grading"
                    backgroundURL="frenchdrain.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/drainage'
                />
        <Contact/>
        <Footer />
    </div>
  );
}
}

export default Drainage;