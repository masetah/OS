import React, {Component} from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

class Flower extends Component {
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
    
    <div className="Flower">
        <SmNavbar />
        <h1>Flower Bed Cleanout and Design</h1>
        <ServiceCard
                    title="Flowerbed Service"
                    backgroundURL="frontyard.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/flower-bed'
                />
        <Contact/>
        <Footer />
    </div>
  );
}
}

export default Flower;