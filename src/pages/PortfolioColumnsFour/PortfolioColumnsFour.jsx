import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PageTitleArea from "../../components/PageTitleArea";
import "./PortfolioColumnsFour.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useSelector } from "react-redux";

const PortfolioColumnsFour = () => {
  const [isOpen, setOpen] = useState(false);
  const { portfolioColumnsStore } = useSelector(
    (state) => state.portfolioColumnsReducer
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

      <PageTitleArea className="portfolio__four__bg">
        <div className="grid wide">
          <div className="page__title__content">
            <h2>Portfolio Columns Four</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="active">Portfolio Columns Four</li>
            </ul>
          </div>
        </div>
      </PageTitleArea>

      <section className="portfolio__area ptb-100">
        <div className="grid wide">
          <div className="row">
            {portfolioColumnsStore?.map((item, index) => {
              return (
                <div key={index} className="col l-3 m-6 c-12">
                  <div className="single__portfolio">
                    <div
                      className="portfolio__image"
                      style={{
                        backgroundImage: `url(${item.url})`,
                      }}
                    >
                      <div className="price__wrap">
                        <NavLink to="#playVideo" onClick={() => setOpen(true)}>
                          <i className="far fa-play-circle"></i>
                        </NavLink>
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
          </div>
          <div className="portfolio__btn" style={{ textAlign: "center" }}>
            <a href="###" className="default__btn">
              View More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioColumnsFour;
