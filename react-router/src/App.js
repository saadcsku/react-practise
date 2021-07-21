import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Careers from './Components/Careers';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navigation from './Navigation';

function App() {
  return (
    <React.Fragment>  
      <Router>
          <Navigation /> 
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/about"> <About /> </Route>
      <Route exact path="/contact"> <Contact /> </Route>
      <Route exact path="/careers"> <Careers /> </Route>
      </Router>
    </React.Fragment>

  );
}

export default App;
