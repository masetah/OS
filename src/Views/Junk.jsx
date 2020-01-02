import React, {Component} from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

class Junk extends Component {
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
        <h1> Junk Removal Service</h1>
        <ServiceCard
                    title="Junk Removal"
                    backgroundURL="construction-debris.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/junk'
                />
        <Contact />
        <Footer />
    </div>
  );
}
}

export default Junk;