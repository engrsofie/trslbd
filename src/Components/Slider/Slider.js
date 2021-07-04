import React from "react";
import { Carousel } from 'react-bootstrap';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 c-img"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption className="top-txt">
      <b><p>PLAIRE STUDIO</p></b>
      <small>THE FASHION AIRPORT</small>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 c-img"
      src={pic2}
      alt="Second slide"
    />
    <Carousel.Caption className="top-txt">
      <b><p>PLAIRE STUDIO</p></b>
      <small>THE FASHION AIRPORT</small>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 c-img"
      src={pic3}
      alt="Third slide"
    />
    <Carousel.Caption className="top-txt">
      <b><p>PLAIRE STUDIO</p></b>
      <small>THE FASHION AIRPORT</small>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Slider;