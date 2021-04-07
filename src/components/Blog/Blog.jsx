import React from "react";
import { useSelector } from "react-redux";
import { BlogContainer } from "./BlogElements";

const Blog = () => {
  const { blogStore } = useSelector((state) => state.blogReducer);
  return (
    <>
      <BlogContainer className="ptb-100">
        <div className="container">
          <div className="section__title">
            <span>News Feeds</span>
            <h2>Get The Latest News</h2>
          </div>

          <div className="row">
            {blogStore?.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="single__blog">
                    <a href="###" className="blog__img">
                      <img src={item.url} alt={item.blogName} />
                    </a>
                    <div className="blog__content">
                      <ul>
                        <li>
                          <i className="far fa-user"></i>
                          <a href="###">{item.name}</a>
                        </li>
                        <li>
                          <i className="far fa-calendar-alt"></i>
                          {item.release}
                        </li>
                      </ul>
                      <a href="###">
                        <h3>{item.blogName}</h3>
                      </a>
                      <p>{item.description}</p>
                      <a href="###" className="learn__more">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BlogContainer>
    </>
  );
};

export default Blog;
