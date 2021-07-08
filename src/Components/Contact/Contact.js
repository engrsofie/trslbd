import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import NavbarSection from '../NavbarSection/NavbarSection';
import {FaHome, FaChevronRight } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <div className="Product">
                <NavbarSection/>
            <div className="Item">
           <h6> <FaHome/> <FaChevronRight/> <span>Contact US</span> </h6> 
            </div>
            <div className="ProductHeading">
                <h1>Contact</h1>
                </div>
                <h1>this is new world Contact</h1>
                </div>
                <Footer/>
        </div>
    );
};

export default Contact;