import React from 'react';
import './Factory.css';
import Footer from '../../Footer/Footer';
import NavbarSection from '../../NavbarSection/NavbarSection';
import {FaHome, FaChevronRight } from "react-icons/fa";
import { Link  } from 'react-router-dom';
import {Card, CardImg, CardGroup} from 'reactstrap';


import ofc_01 from "../../images/farics/1.jpg";
import ofc_02 from "../../images/farics/2.jpg";
import ofc_03 from "../../images/farics/3.jpg";
import ofc_04 from "../../images/farics/4.jpg";
import ofc_05 from "../../images/farics/5.jpg";
import ofc_06 from "../../images/farics/6.jpg";
import ofc_07 from "../../images/farics/7.jpg";
import ofc_08 from "../../images/farics/8.jpg";
import ofc_09 from "../../images/farics/9.jpg";
import ofc_10 from "../../images/farics/10.jpg";
import ofc_11 from "../../images/farics/11.jpg";
import ofc_12 from "../../images/farics/12.jpg";
import ofc_13 from "../../images/farics/13.jpg";
import ofc_14 from "../../images/farics/14.jpg";
import ofc_15 from "../../images/farics/15.jpg";
import ofc_16 from "../../images/farics/16.jpg";
import ofc_17 from "../../images/farics/17.jpg";


const Factory = () => {
    return (
      <div>
        <div className="Product">
          <NavbarSection />
          <div className="Item">
            <h6>
              {" "}
              <FaHome /> <FaChevronRight /> <span>FABRICS</span>{" "}
            </h6>
          </div>
          <div className="ProductHeading">
            <h1>FABRICS</h1>
            <div className="btnS">
              <Link to="/Office">
                {" "}
                <button type="button" class="btn btn-outline-success btn-lg ">
                  G A R M E N T S
                </button>
              </Link>
              <Link to="/Factory">
                {" "}
                <button
                  type="button"
                  class="btn btn-outline-success btn-lg active"
                >
                  F A B R I C S
                </button>
              </Link>
            </div>
          </div>
          <div className="container">
            <img src={ofc_01} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_02} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_03} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_04} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_05} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_06} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_07} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_08} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_09} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_10} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_11} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_12} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_13} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_14} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_15} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_16} class="img-fluid" alt="Responsive image"></img>
            <img src={ofc_17} class="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Factory;