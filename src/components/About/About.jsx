import React from "react";

import { AboutContainer } from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer className="ptb-100">
        <div className="container">
          <div className="about__content__wrap">
            <div className="row">
              <div className="col-lg-8">
                <div className="about__content">
                  <span>VIVI BIO</span>
                  <h2>WE ARE A CREATIVE VIDEO PRODUCTION COMPANY</h2>
                  <p>
                    Video production work with producing video content. It is
                    the analogical of film making, but the images are digitally
                    recorded instead of film stock. There are three levels of
                    video production: production, pre-production and
                    post-production the images are digitally recorded instead of
                    film stock producing video content. It is the
                  </p>

                  <a href="###" className="default__btn">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about__img">
                  <img src="./image/about-img1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutContainer>
    </>
  );
};

export default About;
