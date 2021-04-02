import React from "react";
import { NavLink } from "react-router-dom";
import PageTitleAreas from "../../components/PageTitleArea/PageTitleArea";
import "./CartElements.css";

function Cart() {
  return (
    <>
      <PageTitleAreas className="bg__cart">
        <div className="container">
          <div className="page__title__content">
            <h2>Cart</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="active">Cart</li>
            </ul>
          </div>
        </div>
      </PageTitleAreas>

      <section className="cart__area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <form action="">
                <div className="cart__wraps">
                  <div className="cart__table">
                    <table className="table table__bordered">
                      <thead>
                        <tr>
                          <th scope="col">image</th>
                          <th scope="col">product name</th>
                          <th scope="col">price</th>
                          <th scope="col">quantity</th>
                          <th scope="col">total</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td colSpan="5">Empty</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="coupon__cart">
                    <div className="row">
                      <div className="col-lg-8 col-sm-7">
                        <div class="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon Code"
                          />
                          <button type="button">Apply Coupoon</button>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-5 text-right">
                        <div className="update__cart__btn">
                          <a href="###" className="default__btn two">
                            Update Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="cart__totals">
                <h3>Checkout Summary</h3>
                <ul>
                  <li>
                    Subtotal <span>$0.00</span>
                  </li>
                  <li>
                    Shipping <span>$10.00</span>
                  </li>
                  <li>
                    Coupon <span>$0.00</span>
                  </li>
                  <li>
                    Total <span>$10.00</span>
                  </li>
                  <li>
                    Payable Total <span>$10.00</span>
                  </li>
                </ul>

                <div className="default__btn two">proceed to checkout</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
