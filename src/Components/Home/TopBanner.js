import React from "react";
import { Carousel } from "react-bootstrap";
import banner from '../../img/topbanner.jpg'
import './topbanner.css'


const TopBanner = () => {
  return (
    <div className="container">
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src="https://m.media-amazon.com/images/I/61A-FlfMzRS._AC_UL320_.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-danger">First slide label</h3>
      <h5 className="text-warning">Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src="https://m.media-amazon.com/images/I/711m3mlrISL._AC_UL320_.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-danger">Second slide label</h3>
      <h5 className="text-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 mx-auto"
      src="https://m.media-amazon.com/images/I/817n0861pYL._AC_UL320_.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-danger">Third slide label</h3>
      <h5 className="text-warning">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default TopBanner;
