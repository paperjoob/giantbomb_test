import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

// Components
import './App.css';
import Search from './Search';
import Rent from './Rent';
// Bootstrap
import { Navbar, Nav, } from 'react-bootstrap';

function App() {
  return (

    <Router>
    <div className="App">
    <Navbar expand="lg" variant="dark" bg="dark" fixed="top" >
      <Navbar.Brand href="#">Giant Bomb Rental</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to='/' exact>Search</Nav.Link>
        <Nav.Link as={NavLink} to='/rent' exact>Checkout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
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
    </div>
    </Router>
  );
}

export default App;
