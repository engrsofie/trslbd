import React from "react";
import "./CompanySummary.css";
import Footer from "../Footer/Footer";
import NavbarSection from "../NavbarSection/NavbarSection";
import { FaHome, FaChevronRight } from "react-icons/fa";
// import companysummary from "../images/company-summary.png";

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
            <br /> <br /> “Trade Route Sourcing offers a full range of apparel solutions for Ladies, Men’s, Essentials, Kids, and Babies.

At Trade Route Sourcing, we design, develop, source and manufacture a wide range of apparel with each of our product lines developed by a dedicated team of in-house designers. Our design team travels extensively to identify the latest trends and use their skills, experience, and creativity to transform these trends into highly commercial designs.

Trade Route Sourcing has Office in New York, USA & Dhaka, Bangladesh. We have factories located across all major sourcing destinations with dedicated sample workshops always ensuring a quick response and speed to market.

Trade Route Sourcing provides products for international retailers who have brand values that are focused of outstanding quality, style, and exceptional value.

The time and cost efficiencies delivered by our manufacturing partners in the Far East in desirable products hitting the shop floor in record time displaying a competitive price tag.

Trade Route Sourcing offers our retail partners a complete solution, from design to production, combining the strengths from Bangladesh, China and India in providing an extensive diverse range of accessories.

Trade Route Sourcing headquarters are in Dhaka, Bangladesh. We are one of the largest consumer goods design, product development, and sourcing, virtual manufacturing and distribution businesses in Asia. We work with global retailers and brands and specialize in delivering world class garments products at competitive prices.

We provide complete sourcing solutions to our global customers managing each step in the global supply chain process for retailers and brands.

Trade Route promotes an entrepreneurial culture thereby attracting the best and the brightest from the global supply chain industry. We have a diverse management team consisting of people from various backgrounds, nationalities, ethnicities and cultures.

We hold ourselves to the highest standard of ethics and believe in complete transparency to all stakeholders. “ <br /> <br />{" "}
          </p>
          {/* <img
            src={companysummary}
            class="img-fluid"
            alt="Responsive image"
          ></img> */}
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default CompanySummary;
