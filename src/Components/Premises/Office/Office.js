import React from 'react';
import './Office.css';
import Footer from '../../Footer/Footer';
import NavbarSection from '../../NavbarSection/NavbarSection';
import {FaHome, FaChevronRight } from "react-icons/fa";
import { Link  } from 'react-router-dom';
import {Card, CardImg, CardGroup} from 'reactstrap';

import o_01 from "../../images/garments/1.jpg";
import o_02 from "../../images/garments/2.jpg";
import o_03 from "../../images/garments/3.jpg";
import o_04 from "../../images/garments/4.jpg";
import o_05 from "../../images/garments/5.jpg";
import o_06 from "../../images/garments/6.jpg";
import o_07 from "../../images/garments/7.jpg";
import o_08 from "../../images/garments/8.jpg";
import o_09 from "../../images/garments/9.jpg";
import o_10 from "../../images/garments/10.jpg";
import o_11 from "../../images/garments/11.jpg";
import o_12 from "../../images/garments/12.jpg";
import o_13 from "../../images/garments/13.jpg";
import o_14 from "../../images/garments/14.jpg";
import o_15 from "../../images/garments/15.jpg";
import o_16 from "../../images/garments/16.jpg";
import o_17 from "../../images/garments/17.jpg";
import o_18 from "../../images/garments/18.jpg";
import o_19 from "../../images/garments/19.jpg";



const Office = () => {
    return (
      <div>
        <div className="Product">
          <NavbarSection />
          <div className="Item">
            <h6>
              {" "}
              <FaHome /> <FaChevronRight /> <span>GARMENTS</span>{" "}
            </h6>
          </div>
          <div className="ProductHeading">
            <h1>GARMENTS</h1>
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
            <img src={o_01} class="img-fluid" alt="Responsive image"></img>
            <img src={o_02} class="img-fluid" alt="Responsive image"></img>
            <img src={o_03} class="img-fluid" alt="Responsive image"></img>
            <img src={o_04} class="img-fluid" alt="Responsive image"></img>
            <img src={o_05} class="img-fluid" alt="Responsive image"></img>
            <img src={o_06} class="img-fluid" alt="Responsive image"></img>
            <img src={o_07} class="img-fluid" alt="Responsive image"></img>
            <img src={o_08} class="img-fluid" alt="Responsive image"></img>
            <img src={o_09} class="img-fluid" alt="Responsive image"></img>
            <img src={o_10} class="img-fluid" alt="Responsive image"></img>
            <img src={o_11} class="img-fluid" alt="Responsive image"></img>
            <img src={o_12} class="img-fluid" alt="Responsive image"></img>
            <img src={o_13} class="img-fluid" alt="Responsive image"></img>
            <img src={o_14} class="img-fluid" alt="Responsive image"></img>
            <img src={o_15} class="img-fluid" alt="Responsive image"></img>
            <img src={o_16} class="img-fluid" alt="Responsive image"></img>
            <img src={o_17} class="img-fluid" alt="Responsive image"></img>
            <img src={o_18} class="img-fluid" alt="Responsive image"></img>
            <img src={o_19} class="img-fluid" alt="Responsive image"></img>

          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Office;