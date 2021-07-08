import React from 'react';
import './Factory.css';
import Footer from '../../Footer/Footer';
import NavbarSection from '../../NavbarSection/NavbarSection';
import {FaHome, FaChevronRight } from "react-icons/fa";
import { Link  } from 'react-router-dom';
import {Card, CardImg, CardGroup} from 'reactstrap';

import fac_01 from '../../images/fac_01.jpg';
  import fac_02 from '../../images/fac_02.jpg';
  import fac_03 from '../../images/fac_03.jpg';
  import fac_04 from '../../images/fac_04.jpg';
  import fac_05 from '../../images/fac_05.jpg';
  import fac_06 from '../../images/fac_06.jpg';
  import fac_07 from '../../images/fac_07.jpg';
  import fac_08 from '../../images/fac_08.jpg';
  import fac_09 from '../../images/fac_09.jpg';
  import fac_10 from '../../images/fac_10.jpg';
  import fac_11 from '../../images/fac_11.jpg';
  import fac_12 from '../../images/fac_12.jpg';
  import fac_13 from '../../images/fac_13.jpg';
  import fac_14 from '../../images/fac_14.jpg';
  import fac_15 from '../../images/fac_15.jpg';
  import fac_16 from '../../images/fac_16.jpg';
  import fac_17 from '../../images/fac_17.jpg';
  import fac_18 from '../../images/fac_18.jpg';
  import fac_19 from '../../images/fac_19.jpg';
  import fac_20 from '../../images/fac_20.jpg';


const Factory = () => {
    return (
        <div>
             <div className="Product">
                <NavbarSection/>
            <div className="Item">
           <h6> <FaHome/> <FaChevronRight/> <span>Premises</span> </h6> 
            </div>
            <div className="ProductHeading">
                <h1>Premises</h1>
                <div className="btnS">
                <Link to="/Office">  <button type="button" class="btn btn-outline-success btn-lg " >O F F I C E</button></Link>
                <Link to="/Factory">  <button type="button" class="btn btn-outline-success btn-lg active">F A C T O R Y</button></Link>
                </div>
                </div>
                <CardGroup >
      <Card className="productImg">
        <CardImg  src={fac_01} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_02} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_03} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={fac_04} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_05} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_06} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={fac_07} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_08} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_09} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={fac_10} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_11} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_12} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={fac_13} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_14} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_15} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={fac_16} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_17} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_18} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={fac_19} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={fac_20} alt="Card image cap" />
      </Card>
      
    </CardGroup>
                </div>
                <Footer/>
        </div>
    );
};

export default Factory;