import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Views/Home.jsx';
import Services from './Views/Services.jsx';
import Mow from './Views/Mow.jsx';
import Tree from './Views/Tree.jsx';
import Irrigation from './Views/Irrigation.jsx';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/services' component={Services}/>
        <Route path ='/services/mow' component={Mow}/>
        <Route path ='/services/irrigation' component={Irrigation}/>
        <Route path ='/services/tree' component={Tree}/>
      </Router>
      
    </div>
  );
}

export default App;
