import React from "react";
import footerLogo from "../images/footer-logo.png";
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

            {/* <a className="footerMenu  text-white " href="/Product"></a> */}
            <Nav.Link className="ml-4 text-dark" as={Link} to="/Customer">Product</Nav.Link>

            <a className="footerMenu text-white " href=""> |</a>
            {/* <a className="footerMenu text-white " href="/Machinaries">
              MACHINARIES
            </a>
            <a className="footerMenu text-white " href="">
              |
            </a> */}
            <a className="footerMenu text-white " href="/Customer">
              CUSTOMERS
            </a>
            <a className="footerMenu text-white " href="">
              |
            </a>
            {/* <a className="footerMenu text-white " href="/Premises">
              PREMISES
            </a>
            <a className="footerMenu text-white " href="">
              |
            </a> */}
            <a className="footerMenu text-white" href="/RD">
              R&D
            </a>
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
            <a className="footerMenu text-white" href="/Contact">
              CONTACT US
            </a>
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
