import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {NavDropdown, Navbar} from 'react-bootstrap';
import logo from '../images/logo.png';
import './NavbarSection.css';
const NavbarSection = () => {
    return (
        <div className="NavStyle fixed-top bg-white">
          <Navbar expand="lg" className="container ">
          <img style={{height:'80px'}} src={logo} alt="" />
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto ml-5 ">
    <NavDropdown className="" title="ABOUT" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"><img className="d-block w-100 " src={logo} alt="First slide"/>
    </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className="ml-4" href="#home">PRODUCTS</Nav.Link>
      <Nav.Link className="ml-4" href="#link">MACHINARIES</Nav.Link>
      <Nav.Link className="ml-4" href="#link">BUYERS</Nav.Link>
      <Nav.Link className="ml-4" href="#link">PREMISES</Nav.Link>
      <Nav.Link className="ml-4" href="#link">R&D</Nav.Link>
      <button type="button" class="btn btn-success ml-5">CONTACT US</button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavbarSection;