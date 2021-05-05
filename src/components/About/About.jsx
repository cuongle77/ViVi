import React from "react";
import Fade from "react-reveal/Fade";

import { AboutContainer } from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer className="ptb-100">
        <div className="grid wide">
          <div className="about__content__wrap">
            <div className="row">
              <div className="col l-8 m-12 c-12">
                <div className="about__content">
                  <Fade left>
                    <span>VIVI BIO</span>
                  </Fade>

                  <Fade bottom>
                    <h2>WE ARE A CREATIVE VIDEO PRODUCTION COMPANY</h2>
                  </Fade>

                  <Fade left>
                    <p>
                      Video production work with producing video content. It is
                      the analogical of film making, but the images are
                      digitally recorded instead of film stock. There are three
                      levels of video production: production, pre-production and
                      post-production the images are digitally recorded instead
                      of film stock producing video content. It is the
                    </p>
                  </Fade>

                  <Fade bottom>
                    <a href="###" className="default__btn">
                      Learn more
                    </a>
                  </Fade>
                </div>
              </div>
              <div className="col l-4 m-12 c-12">
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
