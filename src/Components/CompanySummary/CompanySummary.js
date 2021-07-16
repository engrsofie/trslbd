import React from "react";
import "./CompanySummary.css";
import Footer from "../Footer/Footer";
import NavbarSection from "../NavbarSection/NavbarSection";
import { FaHome, FaChevronRight } from "react-icons/fa";
import companysummary from "../images/company-summary.png";

const CompanySummary = () => {
  return (
    <div>
      <div className="Product">
        <NavbarSection />
        <div className="Item">
          <h6>
            {" "}
            <FaHome /> <FaChevronRight /> <span>Company Summary</span>{" "}
          </h6>
        </div>
        <div className="ProductHeading">
          <h1>Company Summary</h1>
        </div>
        <div className="container">
          <p className="rd ">
            {" "}
            <br /> <br /> Trade Route Sourcing Fashions LTD. & Radiant Sweater Ind. Ltd are
            two units of manufacturing within Trade Route Sourcing, aspiring for complete
            customer satisfaction owing to the high quality Sweater at
            competitive prices with an on-schedule delivery and perfection in
            service. It firmly believes that the satisfaction of the valued
            customers is the focal point of its business. In no time, the brand
            has become a name to reckon within the manufactures of Pullovers,
            Cardigans, Sweaters, Jumpers, Vests, Scarves and Woolen Cap etc, for
            men, women and children. Manufacturing around 280,000 to 300,000 pcs
            of both Basic and Fashionable, Fancy sweaters of valued customers
            from 3gg – 12gg. <br /> <br /> The factories are fully compliant to
            work with high standards holding the certification of BSCI, Oeko
            Tex, Sadex and also upgrading to Wrap. The premises of total 200,000
            sq ft working area is also Accord Certified. <br /> <br /> The
            factory premises are run by experienced workers since year 2000. The
            company proudly stands with the lowest employee turnover rate and
            high employee satisfaction. All resources and facilities are
            available within the premises around the clock. <br /> <br />{" "}
            Specials team works on Fire Safety measures and everyone regularly
            practicing fire drills to avoid panic attack during any accidents.
            All fire safety measures are taken and necessary training and fire
            fighters are managed on the floors. <br /> <br /> Along with the
            quality and safety assurance, the group is also now concerned and
            progressing on the creative development of business, expanding to
            open PLAIRE Studio, a design and development wing that can give
            ahead of time and fast fashion development support to Customer to
            gain a competitive advantage. <br /> <br />{" "}
          </p>
          <img
            src={companysummary}
            class="img-fluid"
            alt="Responsive image"
          ></img>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default CompanySummary;
