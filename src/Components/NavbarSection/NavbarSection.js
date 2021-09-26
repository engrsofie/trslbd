import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavDropdown, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";
import garment_01 from "../images/garment_01.jpg";
import garment_02 from "../images/garment_02.jpg";
import garment_03 from "../images/garment_03.jpg";
import "./NavbarSection.css";
import { Link } from "react-router-dom";
const NavbarSection = () => {
  return (
    <div className="NavStyle fixed-top bg-white">
      <Navbar expand="lg" className="container ">
        <a href="/">
          <img style={{ height: "80px" }} src={logo} alt="" />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-5 ">
            <NavDropdown className="text-dark" title="ABOUT" id="nav-dropdown ">
              <NavDropdown.Item eventKey="4.1" as={Link} to="/">
                ABOUT US
              </NavDropdown.Item>
              {/* <NavDropdown.Item eventKey="4.2" as={Link} to="/CompanySummary">
                COMPANY SUMMARY
              </NavDropdown.Item> */}
              <NavDropdown.Item eventKey="4.3" as={Link} to="/Managements">
                MANAGEMENTS WORD
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">
                <div className="NavImg">
                  <img src={garment_01} alt="First slide" />
                  <img src={garment_02} alt="First slide" />
                  <img src={garment_03} alt="First slide" />
                </div>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="ml-4 text-dark" as={Link} to="/">
              HOME
            </Nav.Link>

            {/* <Nav.Link className="ml-4 text-dark" as={Link} to="/Machinaries">
              Machinaries
            </Nav.Link> */}

            <Nav.Link className="ml-4 text-dark" as={Link} to="/Product">
              PRODUCTS
            </Nav.Link>

            <Nav.Link className="ml-4 text-dark" as={Link} to="/Customer">
              CUSTOMERS
            </Nav.Link>

            <Nav.Link className="ml-4 text-dark" as={Link} to="/RD">
              R&D
            </Nav.Link>

            <Nav.Link className="ml-4 text-dark" as={Link} to="/Premises">
              PORTFOLIO
            </Nav.Link>
            <Link to="/Contact">
              {" "}
              <button type="button" class="btn btn-success ml-5 ">
                CONTACT US
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
