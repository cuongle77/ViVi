import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PageTitleAreas from "../../components/PageTitleArea/PageTitleArea";
import "./CartElements.css";

function Cart() {
  const { cartStore, shipping, coupon } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();
  const handleQuantityChange = (code, quantity) => {
    dispatch({
      type: "QUANTITY_CHANGE",
      code,
      quantity,
    });
  };
  const handleDelete = (code) => {
    dispatch({
      type: "DELETE_PRODUCT",
      code,
    });
  };

  const subTotal = cartStore.reduce((sum, item) => {
    return (sum += item.newPrice * item.quantity);
  }, 0);
  const total = subTotal + shipping;

  return (
    <>
      <PageTitleAreas className="bg__cart">
        <div className="grid wide">
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
        <div className="grid wide">
          <div className="row">
            <div className="col l-8 m-12 c-12">
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
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {cartStore.length === 0 ? (
                          <tr>
                            <td colSpan="5" className="text-center">
                              Empty
                            </td>
                          </tr>
                        ) : (
                          cartStore?.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img src={item.url} alt="" width={130} />
                                </td>
                                <td>{item.name}</td>
                                <td>{"$" + item.newPrice}</td>
                                <td>
                                  <div className="cart__counter">
                                    <button
                                      type="button"
                                      disabled={
                                        item.quantity === 1 ? true : false
                                      }
                                      onClick={() =>
                                        handleQuantityChange(item.code, false)
                                      }
                                    >
                                      <i className="fas fa-minus"></i>
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                      type="button"
                                      disabled={
                                        item.quantity === 5 ? true : false
                                      }
                                      onClick={() =>
                                        handleQuantityChange(item.code, true)
                                      }
                                    >
                                      <i className="fas fa-plus"></i>
                                    </button>
                                  </div>
                                </td>
                                <td>
                                  {"$" +
                                    (item.quantity * item.newPrice).toFixed(2)}
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn__delete"
                                    onClick={() => handleDelete(item.code)}
                                  >
                                    <i className="fas fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="coupon__cart">
                    <div className="row">
                      <div className="col l-8 m-7 c-12">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon Code"
                          />
                          <button type="button">Apply Coupoon</button>
                        </div>
                      </div>
                      <div
                        className="col l-4 mD-5 c-12"
                        style={{ textAlign: "right" }}
                      >
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

            <div className="col l-4 m-12 c-12">
              <div className="cart__totals">
                <h3>Checkout Summary</h3>

                <ul>
                  <li>
                    Subtotal <span>${subTotal.toFixed(2)}</span>
                  </li>
                  <li>
                    Shipping <span>${shipping.toFixed(2)}</span>
                  </li>
                  <li>
                    Coupon <span>${coupon.toFixed(2)}</span>
                  </li>
                  <li>
                    Total <span>${total.toFixed(2)}</span>
                  </li>
                  <li>
                    Payable Total <span>${total.toFixed(2)}</span>
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
