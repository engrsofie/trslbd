import React from 'react';
import './Buyers.css';
import Footer from '../Footer/Footer';
import NavbarSection from '../NavbarSection/NavbarSection';
import {FaHome, FaChevronRight } from "react-icons/fa";
import {Card, CardImg, CardGroup} from 'reactstrap';

import p1 from '../images/01.png';
  import p2 from '../images/02.png';
  import p3 from '../images/03.png';
  import p4 from '../images/04.png';
  import p5 from '../images/05.png';
  import p6 from '../images/06.png';
  import p7 from '../images/07.png';
  import p8 from '../images/08.png';
  import p9 from '../images/09.png';
  import pp10 from '../images/10.png';
  import pp11 from '../images/11.png';
  import pp12 from '../images/12.png';
  
 
const Buyers = () => {
    return (
        <div>
             <div className="Product">
                <NavbarSection/>
            <div className="Item">
           <h6> <FaHome/> <FaChevronRight/> <span>Buyers</span> </h6> 
            </div>
            <div className="ProductHeading">
                <h1>Buyers</h1>
                <CardGroup >
      <Card className="productImg">
        <CardImg  src={p1} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p2} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p3} alt="Card image cap" />
      </Card>
    </CardGroup>
    <CardGroup >
      <Card className="productImg">
        <CardImg  src={p4} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p5} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p6} alt="Card image cap" />
      </Card>
    </CardGroup>
    <CardGroup >
      <Card className="productImg">
        <CardImg  src={p7} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p8} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p9} alt="Card image cap" />
      </Card>
    </CardGroup>
    <CardGroup >
      <Card className="productImg">
        <CardImg  src={pp10} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={pp11} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={pp12} alt="Card image cap" />
      </Card>
    </CardGroup>
    
            </div>
            </div>
            <Footer/>
            </div>
    );
};

export default Buyers;