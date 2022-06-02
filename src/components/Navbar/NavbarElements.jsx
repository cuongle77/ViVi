import styled from "styled-components";

export const MainNav = styled.div`
  position: ${({ scroll }) => (scroll ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #fff;
  box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);

  .nav__area {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    .nav__area {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  @media (min-width: 740px) and (max-width: 1023px) {
    .nav__area {
      padding: 10px 50px;
    }
  }

  @media (max-width: 739px) {
    .nav__area {
      padding: 5px 20px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  .logo__brand {
    display: block;
    text-decoration: none;

    img {
      display: block;
      width: 100%;
    }
  }

  .nav__menu {
    list-style: none;
    padding-left: 0;
    margin: 0;

    .nav__menu__item {
      display: inline-block;
      position: relative;
      &:hover .nav__sub__menu {
        opacity: 1;
        visibility: visible;
        top: 150%;
      }
      .menu__item__link {
        font-size: 1.5rem;
        color: #676a6a;
        font-weight: 700;
        margin-left: 20px;
        margin-right: 20px;
        padding: 0;
        transition: all 0.25s ease;
        text-transform: uppercase;
        i {
          font-size: 1.5rem;
          line-height: 0;
          position: relative;
          top: 2px;
          left: 3px;
          font-weight: 700;
        }
      }

      .nav__sub__menu {
        position: absolute;
        left: 0;
        top: 500%;
        list-style: none;
        padding-left: 0;
        margin: 0;
        width: 270px;
        background: #fff;
        opacity: 0;
        visibility: hidden;
        z-index: 999;
        transition: all 0.2s linear;
        box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: #000;
          height: 2px;
          z-index: 100;
        }

        &::after {
          content: "";
          position: absolute;
          top: -8%;
          left: 0;
          width: 30%;
          height: 25px;
          background: transparent;
          z-index: 200;
        }

        .sub__menu_item {
          border-bottom: 1px solid #f5f5f5;
          position: relative;
          .nav__sub__menu {
            position: absolute;
            list-style: none;
            padding-left: 0;
            margin: 0;
            top: 0;
            left: 100%;
            background: #fff;
            opacity: 0;
            visibility: hidden;
          }

          &:hover > a {
            background: #f1f1f1;
            opacity: 1;
          }

          &:hover > .nav__sub__menu {
            opacity: 1;
            visibility: visible;
          }

          a {
            text-decoration: none;
            color: inherit;
            display: flex;
            align-items: center;
            padding: 12px 16px;
            font-size: 1.3rem;
            font-weight: 700;
            opacity: 0.6;
            transition: all 0.25s linear;
            width: 100%;
            text-transform: uppercase;

            i {
              display: inline-block;
              margin-left: auto;
            }
          }
        }

        .sub__menu_item:last-child {
          border-bottom: none;
        }
      }

      &:hover {
        .menu__item__link {
          text-decoration: none;
          color: #3b3d3d;
        }
      }
    }
  }

  .other__option {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-search {
      position: relative;

      .search__form {
        display: flex;
        align-items: center;
        width: 250px;
        border-bottom: 1px solid #cfcfcf;

        &:focus-within {
            border-bottom: 1px solid #302f2f;
          }

        input {
          border: none;
          padding: 8px 0 8px 0;
          font-size: 1.5rem;
          color: #676a6a;
          font-weight: 700;
          text-transform: uppercase;
          outline: none;
          width: 100%;
          transition: border 0.25s linear;
          background: transparent;
          margin-right: 8px;
        }

        i {
          font-size: 1.8rem;
          margin-left: 20px;
        }
      }

      .list-results {
        width: 100%;
        background: #fff;
        position: absolute;
        left: 0;
        top: calc(100% + 6px);
        z-index: 1000;
        padding: 16px 0;
        box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.2);

        .item-found {
          display: flex;
          align-items: center;
          padding: 4px 8px;
          margin-bottom: 1px;
          cursor: pointer;

          &:hover {
            background: #f2f2f2;
          }

          &:last-child {
            margin-bottom: 0;
          }

          .img {
            width: 40px;
            height: 40px;
            margin-right: 8px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .content {
            display: flex;
            align-items: center;
            flex: 1;

            .text {
              h4 {
                font-size: 1.2rem;
                font-weight: 600;
                margin-bottom: 0;
              }

              p {
                margin-bottom: 0;
              }
            }

            .price {
              margin-left: 8px;
              font-weight: bold;
              color: red;
            }

          }

          .cart > .default__btn {
            padding: 0;
            border: none;
            background: transparent;
            outline: none;

            i {
              color: #999;
              &:hover {
                color: #333;
              }
            }

          }
        }
      }
    }

    .nav__cart {
      margin-left: 30px;
      position: relative;

      .nav__cart__link {
        position: relative;
        display: inline-block;
        text-decoration: none;
        color: #3b3d3d;
        &:hover {
          text-decoration: none;
          color: #3b3d3d;
        }

        i {
          line-height: 2rem;
          font-size: 2rem;
        }

        span {
          position: absolute;
          top: -30%;
          left: 65%;
          padding: 2px 4px;
          font-size: 1rem;
          border-radius: 15px;
          line-height: 1rem;
          display: block;
          background: red;
          color: #fff;
          text-align: center;
        }
      }
    }

    .nav__icon__bars {
      margin-left: 30px;
      cursor: pointer;

      &__sidebar {
        display: inline-block;
        color: #3b3d3d;
        border: none;
        outline: none;
        background-color: unset;

        i {
          line-height: 2.5rem;
          font-size: 2.5rem;
        }
      }

      &__mobile {
        display: inline-block;
        color: #3b3d3d;
        border: none;
        outline: none;
        display: none;
        background-color: unset;

        i {
          line-height: 2.5rem;
          font-size: 2.5rem;
        }
      }

      &__mobile__close {
        display: inline-block;
        color: #3b3d3d;
        border: none;
        outline: none;
        display: none;
        background-color: unset;

        i {
          line-height: 2.5rem;
          font-size: 2.5rem;
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    .nav__menu {
      .nav__menu__item {
        .menu__item__link {
          margin: 0 15px;
        }
      }
    }

    .other__option {
      .search__form {
        width: 120px;
      }
    }
  }

  @media (max-width: 1023px) {
    .nav__menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #fff;
      padding: 15px 50px;
      box-shadow: 0px 10px 45px -40px #000;
      display: none;

      .nav__menu__item {
        display: block;
        padding: 10px 0;

        .menu__item__link {
          margin: 0;
        }

        &:hover {
          .nav__sub__menu {
            top: 100%;
          }
        }
      }
    }

    .nav__menu.active {
      display: block;
    }

    .other__option {
      .search__form {
        display: none;
      }

      .search__form.active {
        display: block;
      }

      .nav__cart {
        display: none;
      }

      .nav__cart.active {
        display: block;
      }

      .nav__icon__bars {
        &__sidebar {
          display: none;
        }

        &__mobile {
          display: block;
        }

        &__mobile.active {
          display: none;
        }

        &__mobile__close {
          display: none;
        }

        &__mobile__close.active {
          display: block;
        }
      }
    }
  }

  @media (max-width: 739px) {
    .nav__menu {
      padding: 0 20px;
      .nav__menu__item {
        .menu__item__link {
          font-size: 1.3rem;
        }
        .nav__sub__menu {
          width: 250px;
          .sub__menu_item {
            .nav__sub__menu {
              top: 100%;
              left: 5%;
            }
          }
        }
      }
    }

    .other__option {
      .search__form {
      }

      .search__form.hide {
        display: none;
      }
    }
  }
`;
