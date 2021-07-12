import React from "react";
import "./RD.css";
import Footer from "../Footer/Footer";
import NavbarSection from "../NavbarSection/NavbarSection";
import { FaHome, FaChevronRight } from "react-icons/fa";

const RD = () => {
  return (
    <div>
      <div className="Product">
        <NavbarSection />
        <div className="Item">
          <h6>
            {" "}
            <FaHome /> <FaChevronRight /> <span>R&D</span>{" "}
          </h6>
        </div>
        <div className="ProductHeading">
          <h1>Research And Development</h1>
        </div>
        <p className="container rd">
          {" "}
          <br /> <br /> This is a forward integrated approach of TRSLBD to
          introduce their R&D team with their newest business unit PLAIRE
          Studio-The Fashion Airport. Using data from companies like WGSN and
          BOF there are designers who plan the range according to the trend
          reports, merchandisers and product developers then work on it to make
          it into a reality and find ways to get it done at the lowest cost.
          TRSLBD holds a strong network of yarn sourcing and expertise of the
          industry gives us the lead in heavy knitwear. <br />
          <br /> R&D team even works closely with the customers to cater a
          customized need, to design according to their range plan and mood
          board.R&D is also done to give them the hand feel they like at the
          cheapest price possible as the expertise allows to bring changes even
          in yarn compositions, working closely with spinning and dying mills.
          Best part is TRSLBD can manufacture those designs and developments
          with the highest efficiency without any outsourcing or subcontracting.
          This definitely saves customer’s time significantly as well as cost.
          This advancement has been developing the people skills to adapt with
          today’s fast fashion culture and serve customer on time with the right
          product and service. <br /> <br />{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RD;
