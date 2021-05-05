import React from "react";
import { SolutionsContainer } from "./SolutionsElements";
import Fade from "react-reveal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Solutions = () => {
  const { solutionBrand, solutionBrandTwo } = useSelector(
    (state) => state.solutionsReducer
  );
  return (
    <>
      <SolutionsContainer className="ptb-100">
        <div className="grid wide">
          <div className="row align-items-center">
            <div className="col l-6 m-12 c-12">
              <div className="what__we__do__content">
                <Fade left>
                  <span>What we do</span>
                </Fade>
                <Fade bottom>
                  <h2>Video Solution Every Stage</h2>
                </Fade>
                <Fade bottom>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                </Fade>

                <div className="brand__wrap">
                  <div className="row">
                    {solutionBrand?.map((item, index) => {
                      return (
                        <div key={index} className="col l-4 mD-4 c-12">
                          <div className="brand">
                            <a href="###">
                              <img src={item.image} alt="" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Fade bottom>
                  <NavLink to="###" className="default__btn">
                    Contact Us
                  </NavLink>
                </Fade>
              </div>
            </div>

            <div className="col l-6 m-12 c-12">
              <div className="row row--custom">
                {solutionBrandTwo?.map((item, index) => {
                  let addClassMarginTop = index === 0 ? "mt-30" : "";
                  let addClassMarginBottom = index === 3 ? "mt-mince-30" : "";
                  return (
                    <div key={index} className="col l-6 m-6 c-12">
                      <Fade bottom>
                        <>
                          <div
                            className={`what__we__do__item ${addClassMarginTop} ${addClassMarginBottom}`}
                          >
                            <i className={`${item.iconUrl}`}></i>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </>
                      </Fade>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SolutionsContainer>
    </>
  );
};

export default Solutions;
