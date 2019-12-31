import React, {Component} from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

class Christmas extends Component {
    constructor(props) {
      super(props);

      this.state = {
         
      };
  }

  componentDidMount() {
      window.scrollTo(0, 0);
  }

  render() {
      return (    
    <div className="Christmas">
        <SmNavbar />
        <h1>Christmas Lighting</h1>
        <ServiceCard
                    title="Christmas Lighting"
                    backgroundURL="christmas-lights.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/christmas-lights'
                />
        <Contact/>
        <Footer />
    </div>
  );
}
}

export default Christmas;