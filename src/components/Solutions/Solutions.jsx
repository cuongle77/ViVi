import React from "react";
import { SolutionsContainer } from "./SolutionsElements";

const Solutions = () => {
  return (
    <>
      <SolutionsContainer className="ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="what__we__do__content">
                <span>What we do</span>
                <h2>Video Solution Every Stage</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="brand__wrap">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="brand">
                        <a href="###">
                          <img src="./image/brand1.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="brand">
                        <a href="###">
                          <img src="./image/brand2.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 offset-sm-3 offset-md-0">
                      <div className="brand">
                        <a href="###">
                          <img src="./image/brand3.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="###" className="default__btn">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="what__we__do__item mt-30">
                    <i className="flaticon-film-editing"></i>
                    <h3>Pre-Production</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="what__we__do__item">
                    <i className="flaticon-film-editing-1"></i>
                    <h3>Production</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="what__we__do__item">
                    <i className="flaticon-advertising"></i>
                    <h3>Post-Production</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="what__we__do__item mt-mince-30">
                    <i className="flaticon-entertainment"></i>
                    <h3>Conversion</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SolutionsContainer>
    </>
  );
};

export default Solutions;
