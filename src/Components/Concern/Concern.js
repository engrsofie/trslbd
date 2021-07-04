import React from 'react';
import './Concern.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import ll_01 from '../images/ll_01.png';
import ll_02 from '../images/ll_02.png';
import ll_03 from '../images/ll_03.png';
import ll_04 from '../images/ll_04.png';
import ll_05 from '../images/ll_05.png';


const Concern = () => {     

    return (
        <div className="Concern ">
       <div className="card-text text-center">
        <b>Our Ohter Concern</b>
    
      </div>
      <OwlCarousel 
    className='owl-theme mt-3' 
    loop margin={10} loop={true} autoplay={true} >
    <div className='item cardStyle'>
        <img style={{width:'250px', height:'250px'}} src={ll_01} alt=""/>
    </div>
    <div className='item cardStyle'>
        <img style={{width:'250px', height:'250px'}} src={ll_02} alt=""/>
    </div>
    <div className='item cardStyle'>
        <img style={{width:'250px', height:'250px'}} src={ll_03} alt=""/>
    </div>
    <div className='item cardStyle'>
        <img style={{width:'250px', height:'250px'}} src={ll_04} alt=""/>
    </div>
    <div className='item cardStyle'>
        <img style={{width:'250px', height:'250px'}} src={ll_05} alt=""/>
    </div>
</OwlCarousel>;

        </div>
    );
};

export default Concern;