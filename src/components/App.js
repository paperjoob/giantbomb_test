import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Components
import './App.css';
import Search from './Search';
import Rent from './Rent';
// Bootstrap
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (

    <div className="App">
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top" >
      <Navbar.Brand href="#">Giant Bomb Rental</Navbar.Brand>
    </Navbar>
    <Router>
    <div>
      <ul className="nav">
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/rent">Checkout</Link>
        </li>
      </ul>
      <Route exact path="/" component={Search} />
      <Route exact path="/rent" component={Rent} /> 
    </div>
    </Router>
    </div>
  );
}

export default App;
