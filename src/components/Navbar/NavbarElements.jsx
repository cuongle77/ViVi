import styled from "styled-components";

export const MainNav = styled.div`
  position: ${({ scroll }) => (scroll ? "fixed" : "absolute")};
  width: 100%;
  z-index: 999;
  background: #fff;
  box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);

  .nav__area {
    padding-left: 50px;
    padding-right: 50px;
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

    .search__form {
      position: relative;
      width: 250px;
      input {
        display: inline-block;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #cfcfcf;
        padding: 8px 0 8px 0;
        font-size: 1.5rem;
        color: #676a6a;
        font-weight: 700;
        text-transform: uppercase;
        outline: none;
        width: 100%;
        transition: border 0.25s linear;
        background: transparent;
        &:focus {
          border-bottom: 1px solid #302f2f;
        }
      }

      i {
        display: inline-block;
        position: absolute;
        font-size: 1.8rem;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
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

    .nav__mobile-icon {
      margin-left: 30px;
      cursor: pointer;

      .nav__mobile-icon__btn {
        display: inline-block;
        color: #3b3d3d;
        border: none;
        outline: none;
        i {
          line-height: 2.5rem;
          font-size: 2.5rem;
        }
      }
    }
  }
`;
