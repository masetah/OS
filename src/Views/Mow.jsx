import React, {Component} from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceCard from '../Components/ServiceCard.jsx';

class Mow extends Component {
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
    
    <div className="Mow">
        <SmNavbar />
        <h1>Mow Service</h1>
        <ServiceCard
                    title="Mow Service"
                    backgroundURL="green.jpg"
                    description="This will be where the description for the service goes."
                    ServiceLink='/mow'
                />
        <Contact/>
        <Footer />
    </div>
  );
}
}

export default Mow;