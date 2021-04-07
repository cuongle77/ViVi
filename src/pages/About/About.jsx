import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PageTitleArea from "../../components/PageTitleArea/PageTitleArea";
import Products from "../../components/Products";
import "./AboutElements.css";
import { useSelector } from "react-redux";

const About = () => {
  const { partnerStoreAbout } = useSelector((state) => state.partnerReducer);
  return (
    <>
      <PageTitleArea className="bg__about">
        <div className="container">
          <div className="page__title__content">
            <h2>About</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="active">About</li>
            </ul>
          </div>
        </div>
      </PageTitleArea>

      <section className="about__area__two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about__content">
                <span>vivi Bio</span>
                <h2>We Are A Creative Video Production Company</h2>
                <h3>Who We Are</h3>
                <p>
                  Video production work with producing video content. It is the
                  analogical of film making, but the images are digitally
                  recorded instead of film stock. There are three levels of
                  video production: production, pre-production and
                  post-production.
                </p>

                <h3 className="mt-30">Who We Work</h3>
                <p>
                  Video production work with producing video content. It is the
                  analogical of film making, but the images are digitally
                  recorded instead of film stock. There are three levels of
                  video production.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about__grid__img">
                    <img src="./image/about-grid1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about__grid__img">
                    <img src="./image/about-grid2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about__grid__img  mb-0">
                    <img src="./image/about-grid3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 p-0 ">
                  <div className="about__grid__img mb-0">
                    <img src="./image/about-grid4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter__area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single__counter">
                <h3>135</h3>
                <p>Brand Videos</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single__counter">
                <h3>123</h3>
                <p>Creative Filmmakers</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single__counter">
                <h3>3475+</h3>
                <p>Happy Users</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single__counter">
                <h3>10</h3>
                <p>Awards Win</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our__production__area bg__color pt-100 pb-70">
        <div className="container">
          <div className="section__title">
            <span>Our Production</span>
            <h2>Services We Provide</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="what__we__do__item">
                <i className="flaticon-film-editing"></i>
                <h3>Video Production</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="what__we__do__item">
                <i className="flaticon-advertising"></i>
                <h3>Video Production</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="what__we__do__item">
                <i className="flaticon-entertainment"></i>
                <h3>Video Production</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="what__we__do__item">
                <i className="flaticon-film-editing"></i>
                <h3>Video Production</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="what__we__do__item">
                <i className="flaticon-advertising"></i>
                <h3>Video Production</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="what__we__do__item">
                <i className="flaticon-entertainment"></i>
                <h3>Video Production</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team__area pt-100 pb-70">
        <div className="container">
          <div className="section__title">
            <span>FilmMakers</span>
            <h2>Meet The Team</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single__team">
                <div className="team__img">
                  <img src="./image/team1.jpg" alt="" />

                  <ul className="social">
                    <li>
                      <a href="###">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team__content">
                  <h3>Phyllis Trimble</h3>
                  <span>Director, Producer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single__team">
                <div className="team__img">
                  <img src="./image/team2.jpg" alt="" />

                  <ul className="social">
                    <li>
                      <a href="###">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team__content">
                  <h3>Phyllis Trimble</h3>
                  <span>Director, Producer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single__team">
                <div className="team__img">
                  <img src="./image/team3.jpg" alt="" />
                  <ul className="social">
                    <li>
                      <a href="###">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team__content">
                  <h3>Phyllis Trimble</h3>
                  <span>Director, Producer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-color">
        <Products />
      </div>

      <section className="collaborate__area ptb-100">
        <div className="container">
          <div className="section__title ">
            <span>Collaborate</span>
            <h2>Work With Us</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="collaborate__img">
                <img src="./image/collaborate-img.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="collaborate__form">
                <form>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="Name"
                          placeholder="What Your Name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="Email"
                          placeholder="Your Email Address"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Company</label>
                        <input
                          type="text"
                          name="Company"
                          placeholder="What Company Do You Work?"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          name="Title"
                          placeholder="What's Your Title"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label>Service</label>
                        <input
                          type="text"
                          name="Service"
                          placeholder="Podcast Production"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="Message"
                          rows="5"
                          placeholder="How Can We Help You?"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="default__btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner__wrap bg-color ptb-100">
        <div className="container">
          <OwlCarousel
            className="owl-theme"
            autoplay
            smartSpeed={1000}
            autoplayHoverPause
            items={6}
            loop
            margin={30}
          >
            {partnerStoreAbout?.map((item, index) => {
              return (
                <div key={index} className="partner__item">
                  <a href="##">
                    <img src={item.url} alt="Img" />
                  </a>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default About;
