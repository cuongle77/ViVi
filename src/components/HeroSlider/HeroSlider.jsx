import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { HeroContainer } from "./HeroSliderElements";
import { useSelector } from "react-redux";

import { Animated } from "react-animated-css";

const HeroSlider = () => {
  let { arrHeroSlide } = useSelector((state) => state.heroSlideReducer);
  return (
    <>
      <HeroContainer className="hero__slider">
        <OwlCarousel
          className="owl-theme"
          items="1"
          autoplay
          smartSpeed={1000}
          loop
          autoplayTimeout={7000}
          autoplayHoverPause
          mouseDrag={false}
          margin={0.02}
          dots
        >
          {arrHeroSlide.map((item, index) => {
            return (
              <div
                key={index}
                className="hero__sider__item"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <div className="d__table">
                  <div className="d__table__cell">
                    <div className="container">
                      <div className="hero__slider__text">
                        <Animated className="fadeInUp" animationInDelay={1000}>
                          <h1>{item.title}</h1>
                        </Animated>

                        <Animated className="fadeInUp" animationInDelay={2000}>
                          <p>{item.description}</p>
                        </Animated>

                        <Animated className="fadeInUp" animationInDelay={3000}>
                          <div className="slider__btn ">
                            <a href="###" className="default__btn">
                              View more
                            </a>
                          </div>
                        </Animated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>

        <div className="social__wrap">
          <ul>
            <li className="follow__us">Follow Us:</li>
            <li>
              <a href="##">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="##">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="##">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="##">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </HeroContainer>
    </>
  );
};

export default HeroSlider;
