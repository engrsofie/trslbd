import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {Button, NavDropdown} from 'react-bootstrap';
import logo from '../images/logo.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="p-4 fixed-top navposition bg-white text-dark">
          <img className="nav-img ml-5" src={logo} alt="First slide"/>
             <Nav className="justify-content-center mt-1 navText " activeKey="/home">
             <Nav variant="tabs" defaultActiveKey="/home">
             <NavDropdown className="navT" title="ABOUT" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"><img className="d-block w-100 " src={logo} alt="First slide"
    />
    </NavDropdown.Item>
      </NavDropdown>
             </Nav>
    <Nav.Item className="ml-4 navT">
      <Nav.Link href="/home">PRODUCTS</Nav.Link>    
    </Nav.Item>
    <Nav.Item className="ml-4 navT">
      <Nav.Link eventKey="link-1">MACHINARIES</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ml-4 navT">
      <Nav.Link eventKey="link-2">PREMISES</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ml-4 navT">
      <Nav.Link eventKey="link-2">R&D</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ml-4">
    <Button variant="success">CONTACT US</Button>{' '}
    </Nav.Item>
  </Nav>
        </div>
    );
};

export default Navbar;