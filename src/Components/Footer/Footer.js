import React from 'react';
import footerLogo from '../images/footer-logo.png';
import './Footer.css';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className=" bgFooter ">
           <div className="container row">
               <div className="col-md-4 test text-white">
                <img src={footerLogo} />
                <p className="mt-4">CONNECT WITH TRSLBD</p>
                <h3 className="fontA ">< FaFacebookSquare /> <FaTwitterSquare/> <FaLinkedin/> <FaInstagram/></h3>
                </div>

                <div className="col-md-6 footerText ml-5">
                 <div className="footerMenu text-white">
                 <a className="footerMenu  text-white " href="">PRODUCTS</a>
                 <a className="footerMenu text-white " href="">|</a>
                  <a className="footerMenu text-white " href="">MACHINARIES</a>
                  <a className="footerMenu text-white " href="">|</a>
                  <a className="footerMenu text-white " href="">BUYERS</a>
                  <a className="footerMenu text-white " href="">|</a>
                  <a className="footerMenu text-white " href="">PREMISES</a>
                  <a className="footerMenu text-white " href="">|</a>
                  <a className="footerMenu text-white" href="">R&D</a>
                 </div>
                 <div>
                 <a className="footerMenu text-white" href="">COMPANY SUMMARY</a>
                  <a className="footerMenu text-white" href="">|</a>
                  <a className="footerMenu text-white" href="">MANAGEMENTS WORD</a>
                  <a className="footerMenu text-white" href="">|</a>
                  <a className="footerMenu text-white" href="">CONTACT US</a>
                 </div>
                </div>
            </div>
            <div className="bgFooter1 text-center p-4">
        <small>© 2018. All Right Reserved by TRSLBD.</small>
    </div>
        </div>
    );
};

export default Footer;