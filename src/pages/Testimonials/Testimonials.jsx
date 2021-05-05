import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PageTitleArea from "../../components/PageTitleArea/PageTitleArea";
import "./Testimonials.css";

const Testimonials = () => {
  const { testimonialStore } = useSelector((state) => state.testimonialReducer);
  return (
    <>
      <PageTitleArea className="bg__testimonials">
        <div className="grid wide">
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
        <div className="grid wide">
          <div className="row">
            {testimonialStore?.map((item, index) => {
              return (
                <div key={index} className="col l-6 m-12 c-12">
                  <div className="testimonial__text">
                    <img src={item.url} alt={item.name} />
                    <i className="fas fa-quote-right"></i>
                    <p>{item.desc}</p>
                    <h3>{item.name}</h3>
                    <span>{item.job}</span>
                  </div>
                </div>
              );
            })}

            <div className="col l-12 m-12 c-12">
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
