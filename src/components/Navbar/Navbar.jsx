import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";
import useDebounce from "../../customHooks/useDebounce";
import useOnClickOutside from "../../customHooks/useOnClickOutSide";
import { MainNav, Nav } from "./NavbarElements";

function Navbar({ handleOpenSideBar, Isshow }, props) {
  const { exclusiveHopStore } = useSelector(
    (state) => state.exclusiveHopReducer
  );
  const { cartStore } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const ref = useRef();

  const [scroll, setScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const timeDelay = 500;

  const debounced = useDebounce(valueSearch, timeDelay);

  let activeClass = isOpen ? "active" : "";
  let hideClass = isOpen ? "hide" : "";

  useEffect(() => {
    const handleScroll = () => {
      const lastScroll = window.scrollY;
      if (lastScroll > 250) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  useEffect(() => {
    const timeLoading = setTimeout(() => {
      setLoading(false)
    }, timeDelay);


    return () => clearTimeout(timeLoading)
  }, [debounced]);

  useEffect(() => {
    if (!exclusiveHopStore) return;
    if (debounced) {
      const matches = [...exclusiveHopStore].filter((item) => {
        const regex = new RegExp(`${debounced}`, 'gi');
        return item.name.match(regex) || item.director.match(regex) || item.release.match(regex);
      });
      setLoading(true);
      setListProducts(matches);
    } else {
      setListProducts([]);
    }
  }, [exclusiveHopStore, debounced]);

  useOnClickOutside(ref, () => {
    setListProducts([]);
    setValueSearch('');
  })

  const handleChangeValue = (e) => {
    const valueSearch = e.target.value;
    if (!valueSearch.startsWith(' ')) {
      setValueSearch(valueSearch)
    }
  }

  const handleMenuMoblie = () => {
    setOpen(!isOpen);
  };

  const handleAddProduct = (item) => {
    const itemUpdate = { ...item, quantity: 1 };
    const action = {
      type: "ADD_CART",
      item: itemUpdate,
    };

    dispatch(action);
  };

  const totalPrdoductCart = cartStore.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

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
              <div ref={ref} className="nav-search">
                <div
                  // action=""
                  // onSubmit={e => e.preventDefault()}
                  className={`search__form ${activeClass} ${hideClass}`}
                >
                  <input
                    type="text"
                    placeholder="SEARCH"
                    value={valueSearch || ''}
                    onChange={handleChangeValue}
                  />
                  {loading && <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>}
                  {/* <CloseIcon /> */}
                  <i className="fas fa-search"></i>
                </div>
                {!!listProducts && listProducts.length > 0 && <div className="list-results">
                  {!!listProducts &&
                    listProducts.map((product) => (
                      <div className="item-found" key={product.code}>
                        <div className="img">
                          <img src={product.url} alt="" />
                        </div>
                        <div className="content">
                          <div className="text">
                            <h4>{product.name.toUpperCase()}</h4>
                            <p>{product.director}</p>
                            <p>{product.release}</p>
                          </div>
                          <div className="price">${product.newPrice}</div>
                        </div>
                        <div className="cart">
                          <button type="submit"
                            className="default__btn"
                            onClick={() => handleAddProduct(product)}
                          >
                            <i className="fas fa-shopping-cart"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                </div>}
              </div>

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
        </div >
      </MainNav >
    </>
  );
}

export default Navbar;
