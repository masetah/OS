import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Mowing from './Mowing';
import Gallery from './Gallery';
import Contact from './Contact';
import PageFooter from './Footer';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <AboutUs/>
      <Gallery/>
      <Contact/>

      <Router>
      <Route  exact path="/mow-service" component={Mowing}/>
      </Router>
      

      <PageFooter/>
    </div>
  );
}

export default App;
