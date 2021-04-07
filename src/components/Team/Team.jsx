import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { TeamContainer } from "./TeamElements";
import { useSelector } from "react-redux";

const Team = () => {
  const { teamStore } = useSelector((state) => state.teamReducer);
  return (
    <>
      <TeamContainer className="ptb-100">
        <div className="section__title">
          <span>Film Makers</span>
          <h2>Meet The Team</h2>
        </div>

        <OwlCarousel
          className="owl-theme"
          autoplay
          autoplayHoverPause
          smartSpeed={1000}
          items={5}
          loop
        >
          {teamStore?.map((item, index) => {
            return (
              <div key={index} className="single__team">
                <div className="team__img">
                  <img src={item.url} alt={item.name} />
                  <ul className="social">
                    <li>
                      <a href="###">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team__content">
                  <h3>{item.name}</h3>
                  <span>{item.job}</span>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </TeamContainer>
    </>
  );
};

export default Team;
