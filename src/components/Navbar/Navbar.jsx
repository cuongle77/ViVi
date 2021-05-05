import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MainNav, Nav } from "./NavbarElements";

function Navbar({ handleOpenSideBar, Isshow }, props) {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleScroll = () => {
    const lastScroll = window.scrollY;
    if (lastScroll > 250) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  let activeClass = isOpen ? "active" : "";
  let hideClass = isOpen ? "hide" : "";
  const handleMenuMoblie = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const { cartStore } = useSelector((state) => state.cartReducer);
  const totalPrdoductCart = cartStore.reduce((sum, item) => {
    return (sum += item.quantity);
  }, 0);

  return (
    <>
      <MainNav scroll={scroll}>
        <div className="grid nav__area">
          <Nav>
            <NavLink to="/" className="logo__brand">
              <img src="./image/logo.png" alt="" className="log__brand-img" />
            </NavLink>

            <ul className={`nav__menu ${activeClass}`}>
              <li className="nav__menu__item">
                <NavLink to="/" className="menu__item__link">
                  HOME
                </NavLink>
              </li>

              <li className="nav__menu__item">
                <NavLink to="/about" className="menu__item__link">
                  ABOUT
                </NavLink>
              </li>

              <li className="nav__menu__item">
                <NavLink to="###" className="menu__item__link">
                  PAGES
                  <i className="fas fa-angle-down"></i>
                </NavLink>

                <ul className="nav__sub__menu">
                  <li className="sub__menu_item">
                    <NavLink to="/testimonials">TESTIMONIALS</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="">
                      PORTFOLIOR
                      <i className="fas fa-angle-down"></i>
                    </NavLink>

                    <ul className="nav__sub__menu">
                      <li className="sub__menu_item">
                        <NavLink to="/portfolio-columns-two">
                          Portfolio Columns Two
                        </NavLink>
                      </li>
                      <li className="sub__menu_item">
                        <NavLink to="/portfolio-columns-three">
                          Portfolio Columns Three
                        </NavLink>
                      </li>
                      <li className="sub__menu_item">
                        <NavLink to="/portfolio-columns-four">
                          Portfolio Columns Four
                        </NavLink>
                      </li>
                      <li className="sub__menu_item">
                        <NavLink to="###">Portfolio Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">TEAM</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">
                      USER
                      <i className="fas fa-angle-down"></i>
                    </NavLink>
                    <ul className="nav__sub__menu">
                      <li className="sub__menu_item">
                        <NavLink to="###">Portfolio Columns Two</NavLink>
                      </li>
                      <li className="sub__menu_item">
                        <NavLink to="###">Portfolio Columns Three</NavLink>
                      </li>
                      <li className="sub__menu_item">
                        <NavLink to="###">Portfolio Columns Four</NavLink>
                      </li>
                      <li className="sub__menu_item">
                        <NavLink to="###">Portfolio Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">FAG</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">COMMING SOON</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">404 ERROR PAGE</NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__menu__item">
                <NavLink to="###" className="menu__item__link">
                  SHOP
                  <i className="fas fa-angle-down"></i>
                </NavLink>

                <ul className="nav__sub__menu">
                  <li className="sub__menu_item">
                    <NavLink to="###">Shop</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">Cart</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">Checkout</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">Product Details</NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__menu__item">
                <NavLink to="###" className="menu__item__link">
                  BLOG
                  <i className="fas fa-angle-down"></i>
                </NavLink>

                <ul className="nav__sub__menu">
                  <li className="sub__menu_item">
                    <NavLink to="###">Blog Grid</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">Block Left Sidebar</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">Block Right Sidebar</NavLink>
                  </li>
                  <li className="sub__menu_item">
                    <NavLink to="###">Blog Details</NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__menu__item">
                <NavLink to="###" className="menu__item__link">
                  CONTACT
                </NavLink>
              </li>
            </ul>

            <div className="other__option">
              <form
                action=""
                className={`search__form ${activeClass} ${hideClass}`}
              >
                <input type="text" placeholder="SEARCH" />
                <i className="fas fa-search"></i>
              </form>

              <div className={`nav__cart ${activeClass}`}>
                <NavLink to="/cart" className="nav__cart__link">
                  <i className="fas fa-shopping-cart"></i>

                  <span>{totalPrdoductCart}</span>
                </NavLink>
              </div>

              <div className="nav__icon__bars">
                <button
                  className="nav__icon__bars__sidebar"
                  onClick={handleOpenSideBar}
                >
                  <i className="fas fa-bars"></i>
                </button>

                <button
                  className={`nav__icon__bars__mobile ${activeClass}`}
                  onClick={handleMenuMoblie}
                >
                  <i className="fas fa-bars"></i>
                </button>

                <button
                  className={`nav__icon__bars__mobile__close ${activeClass}`}
                  onClick={handleMenuMoblie}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </Nav>
        </div>
      </MainNav>
    </>
  );
}

export default Navbar;
