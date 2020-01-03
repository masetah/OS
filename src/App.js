import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Views/Home.jsx';
import Mow from './Views/Mow.jsx';
import Tree from './Views/Tree.jsx';
import Irrigation from './Views/Irrigation.jsx';
import Sod from './Views/Sod.jsx';
import Flower from './Views/Flower.jsx';
import Drainage from './Views/Drainage.jsx';
import Christmas from './Views/Christmas.jsx';
import ServicePage from './Views/ServicePage.jsx';
import ContactPage from './Views/ContactPage.jsx';
import Junk from './Views/Junk.jsx';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Route exact path ='/' component={Home}/>
        <Route path ='/mow' component={Mow}/>
        <Route path ='/irrigation' component={Irrigation}/>
        <Route path ='/tree' component={Tree}/>
        <Route path ='/sod' component={Sod}/>
        <Route path ='/flowerbed' component={Flower}/>
        <Route path ='/drainage' component={Drainage}/>
        <Route path ='/christmas-lights' component={Christmas}/>
        <Route path ='/services' component={ServicePage}/>
        <Route path ='/contact' component={ContactPage}/>
        <Route path ='/junk' component={Junk}/>
      </Router>
      
    </div>
  );
}

export default App;
