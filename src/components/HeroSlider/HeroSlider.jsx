import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { HeroContainer } from "./HeroSliderElements";
import { useSelector } from "react-redux";

const HeroSlider = () => {
  let { arrHeroSlide } = useSelector((state) => state.heroSlideReducer);
  return (
    <>
      <HeroContainer>
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
          nav
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
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>

                        <div className="slider__btn ">
                          <a href="###" className="default__btn">
                            View more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </HeroContainer>
    </>
  );
};

export default HeroSlider;
