import React from 'react';
import './Product.css';
import Footer from '../Footer/Footer';
import NavbarSection from '../NavbarSection/NavbarSection';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
  import p01 from '../images/01.jpg';
  import p02 from '../images/02.jpg';
  import p03 from '../images/03.jpg';
  import p04 from '../images/04.jpg';
  import p05 from '../images/05.jpg';
  import p06 from '../images/06.jpg';
  import p07 from '../images/07.jpg';
  import p08 from '../images/08.jpg';
  import p09 from '../images/09.jpg';
  import p10 from '../images/10.jpg';
  import p11 from '../images/11.jpg';
  import p12 from '../images/12.jpg';
  import p13 from '../images/13.jpg';
  import p14 from '../images/14.jpg';
  import p15 from '../images/15.jpg';
  import p16 from '../images/16.jpg';
  import p17 from '../images/17.jpg';
  import p18 from '../images/18.jpg';
  import p19 from '../images/19.jpg';
  import p20 from '../images/20.jpg';
  import p21 from '../images/21.jpg';
  import {FaHome, FaChevronRight } from "react-icons/fa";

const Product = () => {
    return (
        <div>
            <div className="Product">
                <NavbarSection/>
            <div className="Item">
           <h6> <FaHome/> <FaChevronRight/> <span>Products</span> </h6> 
            </div>
            <div className="ProductHeading">
                <h1>Products</h1>
                <p>Constantly upgrading in machineries to make production more efficient and deliver the best quality in shortest possible lead-time. Recently, mported 100 sets of Jacquard Machine and soon this year will acquire 200 new sets of 5gg, 7gg and 12gg jacquard machines.</p>
            </div>
            <CardGroup >
      <Card className="productImg">
        <CardImg  src={p01} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p02} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p03} alt="Card image cap" />
      </Card>
    </CardGroup>


    <CardGroup >
      <Card className="productImg">
        <CardImg  src={p04} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p05} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p06} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={p07} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p08} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p09} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={p10} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p11} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p12} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={p13} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p14} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p15} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={p16} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p17} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p18} alt="Card image cap" />
      </Card>
    </CardGroup>

    <CardGroup >
      <Card className="productImg">
        <CardImg  src={p19} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p20} alt="Card image cap" />
      </Card>
      <Card className="productImg">
        <CardImg src={p21} alt="Card image cap" />
      </Card>
    </CardGroup>

            </div>


            <Footer/>
        </div>
    );
};

export default Product;