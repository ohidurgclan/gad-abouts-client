import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/slider/slide1.jpg';
import img2 from '../../../images/slider/slide2.jpg';
import img3 from '../../../images/slider/slide3.jpg';
import img4 from '../../../images/slider/slide4.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <>
          <Carousel>
              {/* Slide 1 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div>
                    <h1>The Agency You Trust to</h1>
                    <h2>Care For Your Journey</h2>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Slide 2 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <div className="txt-left">
                    <h1>A Good Deal of The Futute</h1>
                    <h2>Relaxness & Health Care</h2>
                  </div>
                </Carousel.Caption>
                </Carousel.Item>
              {/* Slide 3 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img3}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <div>
                    <h1>Best Holiday Deals</h1>
                    <h2>For Couple</h2>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Slide 4 */}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider-img"
                  src={img4}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <div className="txt-left">
                    <h1>The Great Place for</h1>
                    <h2>Physical Relaxness</h2>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
        </>
    );
};

export default Slider;