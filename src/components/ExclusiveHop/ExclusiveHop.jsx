import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ExclusiveHopContainer } from "./ExclusiveHopElements";

const ExclusiveHop = () => {
  const { exclusiveHopStore } = useSelector(
    (state) => state.exclusiveHopReducer
  );
  const dispatch = useDispatch();

  const handleAddProduct = (item) => {
    const itemUpdate = { ...item, quantity: 1 };
    const action = {
      type: "ADD_CART",
      item: itemUpdate,
    };

    dispatch(action);
  };

  return (
    <>
      <ExclusiveHopContainer className="ptb-100">
        <div className="grid wide ">
          <div className="section__title">
            <span>Exclusive shop</span>
            <h2>Collect Your Movies Now!</h2>
          </div>

          <div className="row align-items-center">
            <div className="col l-6 m-12 c-12">
              <div className="exclusvie__img">
                <img src="./image/exclusive-product-img-1.jpg" alt="" />
                <div className="exclusvie__img-2">
                  <img src="./image/exclusive-product-img-2.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col l-6 m-12 c-12">
              <div className="exclusvie__video__list">
                {exclusiveHopStore?.map((item, index) => {
                  return (
                    <div key={index} className="row">
                      <div className="col l-3 m-12 c-12">
                        <div className="exclusive__list__img">
                          <a href="###">
                            <img src={item.url} alt={item.name} />
                          </a>
                        </div>
                      </div>

                      <div className="col l-9 m-12 c-12">
                        <div className="exclusive__text">
                          <h3>
                            <a href="###">{item.name}</a>
                          </h3>
                          <span>
                            <del>{item.oldPrice}</del>
                            {item.newPrice}
                          </span>
                          <ul>
                            <li>{item.director}</li>
                            <li>{item.release}</li>
                          </ul>
                          <button
                            type="submit"
                            className="default__btn"
                            onClick={() => handleAddProduct(item)}
                          >
                            <i className="fas fa-shopping-cart"></i>
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ExclusiveHopContainer>
    </>
  );
};

export default ExclusiveHop;
