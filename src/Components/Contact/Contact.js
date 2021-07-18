import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import NavbarSection from "../NavbarSection/NavbarSection";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt,FaMailBulk, FaGlobe } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z454ofk",
        "template_2mbuoix",
        e.target,
        "user_HkMROWa6NvzmiGfSFD85H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="Product">
        <NavbarSection />
        <div className="Item">
          <h6>
            {" "}
            <FaHome /> <FaChevronRight /> <span>Contact US</span>{" "}
          </h6>
        </div>
        <div className="ProductHeading">
          <h1>Contact</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 Contact">
              <h4 className="text-info text-center mt-3">OFFICE</h4>
              <div className="ContactText mt-3">
                <FaMapMarkerAlt />{" "}
                <span> House# 260/6, Room# 403 (3rd Floor), DHaka Biggan College, Bhaban-3, Malibagh, Dhaka-1217</span>
                
                <br />
                <FaPhoneAlt /> <a href="tel:+88 01711050429">+880248952405</a>
                <br />
                <FaMailBulk /> <a href="">shahin@trslbd.com</a>
                <br />
                <FaGlobe /> <a href="http://www.trslbd.com/">http://www.trslbd.com/</a>
                
              </div>

              <br />
              <br />
              <br />
              

            </div>
            <div className="col-md-6">
              <Form onSubmit={sendEmail}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter Your Full Name"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    type="email"
                    placeholder="Enter Your Email address"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1 ">
                  <Form.Label>Type Your Message </Form.Label>
                  <Form.Control name="subject" as="textarea" rows={3} />
                </Form.Group>
                <input
                  type="submit"
                  value="Send Message"
                  class="btn btn-success"
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
