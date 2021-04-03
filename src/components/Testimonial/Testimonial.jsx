import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TestimonialContainer } from "./TestimonialElements";

const Testimonial = () => {
  return (
    <>
      <TestimonialContainer className="ptb-100">
        <div className="container">
          <OwlCarousel
            className="owl-theme"
            items="1"
            autoplay
            smartSpeed={2000}
            autoplayTimeout={7000}
            autoplayHoverPause
            loop
            margin={10}
            dots
            navClass
          >
            <div className="testimonial__item">
              <i className="fas fa-quote-right"></i>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.”
              </p>
              <h3>Kara Golberg</h3>
              <span>Director of Festwork</span>
            </div>
            <div className="testimonial__item">
              <i className="fas fa-quote-right"></i>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.”
              </p>
              <h3>Kara Golberg</h3>
              <span>Director of Festwork</span>
            </div>
            <div className="testimonial__item">
              <i className="fas fa-quote-right"></i>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.”
              </p>
              <h3>Kara Golberg</h3>
              <span>Director of Festwork</span>
            </div>
          </OwlCarousel>
        </div>
      </TestimonialContainer>
    </>
  );
};

export default Testimonial;
