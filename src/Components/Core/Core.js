import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Core.css";
import { Link } from "react-router-dom";
import g4_1 from "../images/g4_1.jpg";
import g4_2 from "../images/g4_2.jpg";
import g4_3 from "../images/g4_3.jpg";
import g4_4 from "../images/g4_4.jpg";

const Core = () => {
  return (
    <div className="bg-clr">
      <div className="">
        <div className="coint card-text center text-center">
          <p>
            {" "}
            <br /> Core Strengths
          </p>
          <small>Manufacturing and Exporting Garments since year 2015. </small>
          <br />
          <br />
        </div>
        <div className="container">
          <CardGroup className="row sizing">
            <div class="col-md-4 image sizing mb-4">
              <img class="image__img w-100" src={g4_1} alt="Bricks" />
              <h5 className="text-center bg-secondary text-white">
                ON TIME SHIPMENT
              </h5>
              <div class="image__overlay image__overlay--primary">
                <p className="text-justify w-75  ">
                  Keeping the most important commitment since 2015. Our
                  experienced team’s combined effort and workmanship has
                  converted this core into our strength and has created a well
                  reputation in the market of maintaining on time delivery.
                </p>
                <Link to="/Contact">
                  {" "}
                  <button type="button" class="btn btn-success ">
                    VIEW MORE...
                  </button>
                </Link>
              </div>
            </div>
            <div class="col-md-4 image sizing mb-4">
              <img class="image__img w-100" src={g4_2} alt="Bricks" />
              <h5 className="text-center bg-secondary text-white">
                DESIGN STUDIO
              </h5>
              <div class="image__overlay image__overlay--primary">
                <p className="text-justify w-75">
                  The new wing of Trade Route Sourcing, PLAIRE Studio has been an added
                  strength to gain competitive advantage in the market for which
                  we can give our customers fast and with the trend, development
                  support of designs. Our young, energetic and  <abbr title="trend aware team
                  makes it fast and easy for our customer to develop their
                  designs as well saves their cost by offering developments
                  based on their consumer and trend updates.">WHO</abbr>
                </p>
                <Link to="/Contact">
                  {" "}
                  <button type="button" class="btn btn-success ">
                    VIEW MORE...
                  </button>
                </Link>
              </div>
            </div>
            <div class="col-md-4 image sizing mb-4">
              <img class="image__img w-100" src={g4_3} alt="Bricks" />
              <h5 className="text-center bg-secondary text-white">
                QUALITY ASSURANCE TEAM
              </h5>
              <div class="image__overlay image__overlay--primary">
                <span className="text-justify w-75 ">
                  Internal Management’s Quality Assurance team works closely and
                  monitors the factory quality assurance team making sure there
                  is no gap in maintaining the required quality of the customer
                  and this operation of quality assurance has been lately a
                  strong strength for the group.
                </span>
                <Link to="/Contact">
                  {" "}
                  <button type="button" class="btn btn-success ">
                    VIEW MORE...
                  </button>
                </Link>
              </div>
            </div>
          </CardGroup>
        </div>
        <div className="container">
          <CardGroup className="row sizing">
            
            {/* <div class="col-md-6 image sizing mb-4">
              <img class="image__img w-100" src={g4_4} alt="Bricks" />
              <h5 className="text-center bg-secondary text-white">
                FULLY COMPLIANT WITH COMPETITIVE PRICE
              </h5>
              <div class="image__overlay image__overlay--primary">
                <p className="text-justify w-75">
                  Owning a complete premise of 185,000 sq. ft. with 100% Accord
                  Certified assures utmost safety for the labours and having
                  upgraded certification of SEDEX, BSCI and Oeko-tex assure
                  buyer’s reliability. Yet hustling hard to keep market
                  competitive price by maintaining high efficiency of production
                  and operation.
                </p>
                <Link to="/Contact">
                  {" "}
                  <button type="button" class="btn btn-success ">
                    VIEW MORE...
                  </button>
                </Link>
              </div>
            </div> */}
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Core;
