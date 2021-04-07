import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PageTitleArea from "../../components/PageTitleArea";
import "./PortfolioColumnsTwoElements.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useSelector } from "react-redux";

const PortfolioColumnsTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const { portfolioColumnsTwoStore } = useSelector(
    (state) => state.portfolioColumnsTwoReducer
  );
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <PageTitleArea className="portfolio__bg">
        <div className="container">
          <div className="page__title__content">
            <h2>Portfolio Columns Two</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="active">Portfolio Columns Two</li>
            </ul>
          </div>
        </div>
      </PageTitleArea>

      <section className="portfolio__area ptb-100">
        <div className="container">
          <div className="row">
            {portfolioColumnsTwoStore?.map((item, index) => {
              return (
                <div key={index} className="col-lg-6 col-md-6">
                  <div className="single__portfolio">
                    <div
                      className="portfolio__image"
                      style={{
                        backgroundImage: `url(${item.url})`,
                      }}
                    >
                      <div className="price__wrap">
                        <a href="#playVideo" onClick={() => setOpen(true)}>
                          <i class="far fa-play-circle"></i>
                        </a>
                      </div>
                    </div>

                    <div className="portfolio__content">
                      <span>{item.type}</span>
                      <h3>
                        <a href="###">{item.context}</a>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-12 text-center">
              <a href="###" className="default__btn">
                View More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioColumnsTwo;
