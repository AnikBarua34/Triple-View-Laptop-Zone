import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../images/banner/bike1.jpg';
import pic2 from '../../../images/banner/bike2.jpg';
import pic3 from '../../../images/banner/bike3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner mt-3">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;