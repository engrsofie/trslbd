import React from 'react';
import './Office.css';
import Footer from '../../Footer/Footer';
import NavbarSection from '../../NavbarSection/NavbarSection';
import {FaHome, FaChevronRight } from "react-icons/fa";
import { Link  } from 'react-router-dom';
import {Card, CardImg, CardGroup} from 'reactstrap';

import ofc_01 from '../../images/ofc_01.jpg';
  import ofc_02 from '../../images/ofc_02.jpg';
  import ofc_03 from '../../images/ofc_03.jpg';
  import ofc_04 from '../../images/ofc_04.jpg';
  import ofc_05 from '../../images/ofc_05.jpg';
  import ofc_06 from '../../images/ofc_06.jpg';

const Office = () => {
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
        <CardImg  src={ofc_01} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={ofc_02} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={ofc_03} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={ofc_04} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={ofc_05} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={ofc_06} alt="Card image cap" />
      </Card>
    </CardGroup>
                </div>
                <Footer/>
        </div>
    );
};

export default Office;