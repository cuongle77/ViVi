import React from "react";
import { GetInTouchContainer } from "./GetInTouchElements";

const GetInTouch = () => {
  return (
    <GetInTouchContainer className="ptb-100">
      <div className="container">
        <div className="get__in__touch__content">
          <h2>Do you like our work?</h2>
          <p>Get in touch today!</p>
          <a href="###" className="default__btn">
            Contact us
          </a>
        </div>
      </div>
    </GetInTouchContainer>
  );
};

export default GetInTouch;
