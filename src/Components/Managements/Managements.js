import React from "react";
import "./Managements.css";
import Footer from "../Footer/Footer";
import NavbarSection from "../NavbarSection/NavbarSection";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Managements = () => {
  return (
    <div>
      <div className="Product">
        <NavbarSection />
        <div className="Item">
          <h6>
            {" "}
            <FaHome /> <FaChevronRight /> <span>Managements Word</span>{" "}
          </h6>
        </div>
        <div className="ProductHeading">
          <h1>Managements Word</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <h3 className="text-info">Message from Chairman</h3>
              <p className="text-justify mt-3">
                From the beginning of the company to the very present, the
                consistent motto and objective is to work with sincerity and
                maintain growth effectively. Giving employment to people and
                serving the society has always been the core value and motive
                for expanding business. We take care of the production in our
                establishment. We believe in our commitment of quality and lead
                time. We also have always taken care of our employees and labor
                in terms of safety, benefits and hence invested in to stay
                compliant.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <h3 className="text-info">Message from Managing Director</h3>
              <p className="text-justify mt-3">
                All started out of passion and a vision in 2015 and since 2021
                it became my core duty to leverage the business into further
                heights with only one motto, “ Efficient and Uncompromising
                Service to our Customers”. Completing my Masters in
                International business and a diploma in Fashion and
                Merchandising I stepped to work different garments industry at
                Bangladesh in leading position. After 15 Years of my service in
                garments trade I decide to involve in business in 2015 and since
                then we have focused a lot in Research, Design and Development
                to serve synergistic services to our customers and also bring
                full efficiency to meet their demands. Successfully we have
                maintained our core value of on time shipment even under immense
                pressure, yet keeping our staff and workers highly motivated to
                love their work and workplace. Currently, we are working on the
                mission to make business of manufacturing come with even more to
                it, where we can deliver our customer updated design collection
                development, fast sampling and a faster lead time for gaining
                market competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Managements;
