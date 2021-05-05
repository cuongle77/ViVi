import React from "react";
import { GetInTouchContainer } from "./GetInTouchElements";
import Fade from "react-reveal/Fade";

const GetInTouch = () => {
  return (
    <GetInTouchContainer className="ptb-100">
      <div className="grid wide">
        <div className="get__in__touch__content">
          <Fade left>
            <h2>Do you like our work?</h2>
          </Fade>
          <Fade right>
            <p>Get in touch today!</p>
          </Fade>
          <Fade bottom>
            <a href="###" className="default__btn">
              Contact us
            </a>
          </Fade>
        </div>
      </div>
    </GetInTouchContainer>
  );
};

export default GetInTouch;
