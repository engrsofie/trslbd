import React from "react";
import footerLogo from "../images/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { NavDropdown, Navbar } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bgFooter ">
      <div className="container row">
        <div className="col-md-5 FooterLogo text-white">
          <img src={footerLogo} />
          <p className="mt-4">CONNECT WITH Trade Route Sourcing</p>
          <a
            target="_blank"
            className="fontA"
            href=" https://www.facebook.com/"
          >
            {" "}
            <FaFacebookSquare />
          </a>{" "}
          <a target="_blank" className="fontA" href="https://twitter.com/">
            <FaTwitterSquare />
          </a>{" "}
          <a target="_blank" className="fontA" href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>{" "}
          <a
            target="_blank"
            className="fontA"
            href="https://www.instagram.com/"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="col-md-6 footerText ml-md-5">
          <div className="footerMenu text-white d-flex flex-wrap">

            <Nav.Link className="footerMenu  text-white" as={Link} to="/Product">P R O D U C T</Nav.Link>

            <a className="footerMenu text-white " href=""> |</a>
            {/* <a className="footerMenu text-white " href="/Machinaries">
              MACHINARIES
            </a>
            <a className="footerMenu text-white " href="">
              |
            </a> */}
            
            <Nav.Link className="footerMenu  text-white" as={Link} to="/Customer">C U S T O M E R S</Nav.Link>

             
            <a className="footerMenu text-white " href="">
              |
            </a>
            {/* <a className="footerMenu text-white " href="/Premises">
              PREMISES
            </a>
            <a className="footerMenu text-white " href="">
              |
            </a> */}
            <Nav.Link className="footerMenu  text-white" as={Link} to="/RD">R & D</Nav.Link>
          </div>
          <div>
            {/* <a className="footerMenu text-white" href="/CompanySummary">
              COMPANY SUMMARY
            </a>
            <a className="footerMenu text-white" href="">
              |
            </a>
            <a className="footerMenu text-white" href="/Managements">
              MANAGEMENTS WORD
            </a>
            <a className="footerMenu text-white" href="">
              |
            </a> */}
            <Nav.Link className="footerMenu  text-white" as={Link} to="/Contact">C O N T A C T</Nav.Link>

          </div>
        </div>
      </div>
      <div className="bgFooter1 text-center p-4 footText">
        <small>© 2021. All Right Reserved by Trade Route Sourcing.</small>
      </div>
    </div>
  );
};

export default Footer;
