import React from "react";
import { SideBarContainer, SideBarContent } from "./SideBarElements";

function SideBar({ isOpen, handleOpenSideBar }) {
  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <SideBarContent isOpen={isOpen}>
          <div className="main__sidebar">
            <div className="sidebar__top">
              <a href="###" className="logo__sidebar">
                <img src="./image/logo.png" alt="" />
              </a>

              <div className="icon__exit__sidebar" onClick={handleOpenSideBar}>
                <i className="fas fa-times"></i>
              </div>
            </div>

            <p className="sidebar__desc">
              Vivi is a high quality video production house. We make a awesome
              branded videos. It is the analogical of film making, but the
              images are digitally recorded instead of film stock.
            </p>

            <div className="sidebar__item">
              <h2>CONTACT US</h2>

              <ul className="contact__method">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>6890 Blvd, The Bronx, NY 1058 New York, USA</p>
                </li>

                <li>
                  <i className="fas fa-envelope"></i>
                  <div className="contact__mail">
                    <a href="mailto:letrungcuong2k@gmail.com">hello@vivi.com</a>
                    <p>
                      Skye: <a href="###">example</a>
                    </p>
                  </div>
                </li>

                <li>
                  <i className="fas fa-phone"></i>

                  <div className="contact__phone__num">
                    <a href="tel:1-587 785 4578">+1 587 785 4578 </a>
                    <a href="tel:1-485 456 0102">+1 485 456 0102</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar__item">
              <h2>INSTAGRAM</h2>

              <ul className="list__img grid__row">
                <li className="img__item column-4">
                  <a href="###" className="img__item__link">
                    <img src="./image/instagram1.jpg" alt="" />
                  </a>
                </li>
                <li className="img__item column-4">
                  <a href="###" className="img__item__link">
                    <img src="./image/instagram2.jpg" alt="" />
                  </a>
                </li>
                <li className="img__item column-4">
                  <a href="###" className="img__item__link">
                    <img src="./image/instagram3.jpg" alt="" />
                  </a>
                </li>

                <li className="img__item column-4">
                  <a href="###" className="img__item__link">
                    <img src="./image/instagram4.jpg" alt="" />
                  </a>
                </li>
                <li className="img__item column-4">
                  <a href="###" className="img__item__link">
                    <img src="./image/instagram5.jpg" alt="" />
                  </a>
                </li>
                <li className="img__item column-4">
                  <a href="###" className="img__item__link">
                    <img src="./image/instagram6.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar__item">
              <h2>SIDEBAR FOLLOW</h2>
              <div className="contact__socials__wrapp">
                <a href="###">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="###">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="###">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="###">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </SideBarContent>
      </SideBarContainer>
    </>
  );
}

export default SideBar;
