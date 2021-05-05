import React from "react";
import { NavLink } from "react-router-dom";
import { FooterTop, FooterBottom } from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterTop className="pt-100 pb-70">
        <div className="grid wide">
          <div className="row">
            <div className="col l-3 m-6 c-12">
              <div className="single__widget">
                <div className="logo">
                  <NavLink to="/" className="logo__footer">
                    <img src="./image/white-logo.png" alt="" />
                  </NavLink>
                </div>

                <h3>SUBSCRIBE NEWSLETTER</h3>
                <form action="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <button>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </form>

                <div className="contact__social">
                  <a href="####">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="####">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="####">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="####">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col l-3 m-6 c-12">
              <div className="single__widget">
                <h2>CONTACT US</h2>

                <ul className="contact__method">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>6890 Blvd, The Bronx, NY 1058 New York, USA</p>
                  </li>

                  <li>
                    <i className="fas fa-envelope"></i>
                    <div className="contact__mail">
                      <a href="mailto:letrungcuong2k@gmail.com">
                        hello@vivi.com
                      </a>
                      <p>
                        <a href="###">Skye: example</a>
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
            </div>

            <div className="col l-3 m-6 c-12">
              <div className="single__widget">
                <h2>ADDITIONAL LINKS</h2>

                <ul className="list__additional__links">
                  <li>
                    <a href="###">About</a>
                  </li>
                  <li>
                    <a href="###">Latest Videos</a>
                  </li>
                  <li>
                    <a href="###">Team</a>
                  </li>
                  <li>
                    <a href="###">Help (FAQ)</a>
                  </li>
                  <li>
                    <a href="###">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col l-3 m-6 c-12">
              <div className="single__widget">
                <h2>INSTAGRAM</h2>

                <ul className="instagram row">
                  <li className="col l-4 c-4">
                    <a href="###">
                      <img src="./image/instagram1.jpg" alt="" />
                    </a>
                  </li>
                  <li className="col l-4 c-4">
                    <a href="###">
                      <img src="./image/instagram2.jpg" alt="" />
                    </a>
                  </li>
                  <li className="col l-4 c-4">
                    <a href="###">
                      <img src="./image/instagram3.jpg" alt="" />
                    </a>
                  </li>

                  <li className="col l-4 c-4">
                    <a href="###">
                      <img src="./image/instagram4.jpg" alt="" />
                    </a>
                  </li>
                  <li className="col l-4 c-4">
                    <a href="###">
                      <img src="./image/instagram5.jpg" alt="" />
                    </a>
                  </li>
                  <li className="col l-4 c-4">
                    <a href="###">
                      <img src="./image/instagram6.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FooterTop>

      <FooterBottom>
        <div className="grid wide">
          <div className="copy__right__wrap">
            <p>
              Copyright @2021 Vivi. Designed By <a href="###">EnvyTheme</a>
            </p>
          </div>
        </div>
      </FooterBottom>
    </>
  );
};

export default Footer;
