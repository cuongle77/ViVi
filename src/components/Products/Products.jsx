import React, { Fragment, useState } from "react";
import { Animated } from "react-animated-css";
import { useSelector } from "react-redux";
import { ProductContainer } from "./ProductElements";

const Products = () => {
  const [activeTab, setTabs] = useState(0);
  const handleChangeTab = (index) => {
    setTabs(index);
  };

  const { productArrr } = useSelector((state) => state.productReducer);

  return (
    <>
      <ProductContainer className="ptb-100">
        <div className="container">
          <div className="section__title">
            <span>Products</span>
            <h2>Award Winning Movies</h2>
          </div>

          <div className="tab">
            <ul className="tabs__nav">
              {productArrr?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={activeTab === index ? "current" : ""}
                    onClick={() => handleChangeTab(index)}
                  >
                    <span>{item.year}</span>
                  </li>
                );
              })}
            </ul>
            <div className="tab__content">
              {productArrr?.map((item, index) => {
                return (
                  <Animated
                    key={index}
                    className={
                      activeTab === index
                        ? "tab__item active zoomIn"
                        : "tab__item"
                    }
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="products">
                          <img src={item.url} alt={item.movieName} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="products__content">
                          <span>{item.movieTheme}</span>
                          <h2>{item.movieName}</h2>
                          <p>{item.description}</p>
                          <a href="###" className="default__btn">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </Animated>
                );
              })}
            </div>
          </div>
        </div>
      </ProductContainer>
    </>
  );
};

export default Products;
