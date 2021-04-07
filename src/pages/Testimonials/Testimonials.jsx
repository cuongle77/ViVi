import React from "react";
import { NavLink } from "react-router-dom";
import PageTitleArea from "../../components/PageTitleArea/PageTitleArea";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <PageTitleArea className="bg__testimonials">
        <div className="container">
          <div className="page__title__content">
            <h2>Testimonials</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="active">Testimonials</li>
            </ul>
          </div>
        </div>
      </PageTitleArea>

      <section className="testimonial__page__area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial__text">
                <img src="./image/client1.jpg" alt="" />
                <i className="fas fa-quote-right"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>
                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial__text">
                <img src="./image/client2.jpg" alt="" />
                <i className="fas fa-quote-right"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>
                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial__text">
                <img src="./image/client3.jpg" alt="" />
                <i className="fas fa-quote-right"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>
                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial__text">
                <img src="./image/client4.jpg" alt="" />
                <i className="fas fa-quote-right"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>
                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial__text">
                <img src="./image/client5.jpg" alt="" />
                <i className="fas fa-quote-right"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>
                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="testimonial__text">
                <img src="./image/client6.jpg" alt="" />
                <i className="fas fa-quote-right"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”
                </p>
                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </div>

            <div className="col-lg-12 col-md-6">
              <div className="pagination__area text-center">
                <a href="###" className="prev page__numbers">
                  <i className="fas fa-chevron-left"></i>
                </a>
                <span className="page__numbers current">1</span>
                <a href="###" className="page__numbers">
                  2
                </a>
                <a href="###" className="page__numbers">
                  3
                </a>
                <a href="###" className="page__numbers">
                  4
                </a>
                <a href="###" className="next page__numbers">
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
