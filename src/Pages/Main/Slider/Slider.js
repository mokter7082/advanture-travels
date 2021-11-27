import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import sli1 from "../../../images/big-dodzy-_DmzCXFEczc-unsplash.jpg";
import sli2 from "../../../images/ehsan-rahman-ojA0DBpe7oc-unsplash.jpg";
import sli3 from "../../../images/fareed-akhyear-chowdhury-xRlZUxpMpY4-unsplash.jpg";

const Slider = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 slider-imges"
          src={sli1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-imges"
          src={sli2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-imges"
          src={sli3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
