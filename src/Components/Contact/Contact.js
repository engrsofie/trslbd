import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import NavbarSection from '../NavbarSection/NavbarSection';
import {FaHome, FaChevronRight } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt  } from "react-icons/fa";

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
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 Contact">
                           <h4 className="text-info" >HEAD OFFICE</h4>
                           <div className="ContactText" >
                          <FaMapMarkerAlt/>  <span> House#27, Road# 16, Sector#4, Uttara, Dhaka-1230</span>
                            <a href=""></a><br/>
                            <FaPhoneAlt/> <a href="tel:+880248952408">+880248952408</a> <br/>
                            <FaPhoneAlt/>  <a href="tel:+880248952405">+880248952405</a>
                           </div>
                           
                           <br/><br/><br/>
                           <h4 className="text-info">FACTORY COMPLEX</h4>
                           <div className="ContactText">
                           <FaMapMarkerAlt/>  <span> Kamarjhuri, National University, Gazipur, Bangladesh</span>
                            <a href=""></a>  <br/>
                            <FaPhoneAlt/> <a href="tel:+88029293364">+88029293364</a> <br/>
                            <FaPhoneAlt/> <a href="tel:+88029291559">+88029291559</a>
                           </div>
                        </div>
                        <div className="col-md-6">
                        <div data-aos="zoom-in" className=" email mt-3 ">
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Full Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email address" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1 ">
    <Form.Label >Type Your Message </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form> 
        </div>
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
        </div>
    );
};

export default Contact;