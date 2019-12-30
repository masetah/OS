import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Views/Home.jsx';
// import Services from './Components/Services.jsx/index.js';
import Mow from './Views/Mow.jsx';
import Tree from './Views/Tree.jsx';
import Irrigation from './Views/Irrigation.jsx';
import Sod from './Views/Sod.jsx';
import Flower from './Views/Flower.jsx';
import Drainage from './Views/Drainage.jsx';
import Christmas from './Views/Christmas.jsx';
import Commercial from './Views/Commercial.jsx';
import Residential from './Views/Residential.jsx';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Route exact path ='/' component={Home}/>
        {/* <Route exact path ='/services' component={Services}/> */}
        <Route path ='/mow' component={Mow}/>
        <Route path ='/irrigation' component={Irrigation}/>
        <Route path ='/tree' component={Tree}/>
        <Route path ='/sod' component={Sod}/>
        <Route path ='/flower-bed' component={Flower}/>
        <Route path ='/drainage' component={Drainage}/>
        <Route path ='/christmas-lights' component={Christmas}/>
        <Route path ='/commercial' component={Commercial}/>
        <Route path ='/residential' component={Residential}/>
      </Router>
      
    </div>
  );
}

export default App;
