import React, {Component} from 'react';
import SmNavbar from '../Components/SmNavbar';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import ServiceContent from '../Components/ServiceContent';
import {Grid, Cell} from 'react-mdl';
class Irrigation extends Component {
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
    
    <div className="Irrigation">
        <SmNavbar />
        <Grid>
          <Cell col={6}>
          <ServiceContent
          title="Irrigation Repair"
          description="Let us inspect and repair your existing irrigation system."
          expectation="O&S will inspect your system for leaks, adjust sprinker heads to conserve water and make necissary repairs."
          />
          </Cell>
          <Cell col={6}>
          <Contact/>
          </Cell>
        </Grid>
        <Footer />
    </div>
  );
}
}

export default Irrigation;