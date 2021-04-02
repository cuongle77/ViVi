import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${({ isOpen }) =>
    isOpen ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0)"};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.25s linear;
  z-index: 1000;
`;

export const SideBarContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  bottom: 0;
  padding: 30px;
  background: #fff;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.25s linear;

  .main__sidebar {
    .sidebar__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0 30px;
      border-bottom: 1px solid #ddd;
      .logo__sidebar {
        display: block;
        text-decoration: none;
        img {
          display: block;
          width: 100%;
        }
      }
      .icon__exit__sidebar {
        cursor: pointer;
        i {
          display: block;
          font-size: 1.6rem;
          line-height: 30px;
          width: 30px;
          height: 30px;
          text-align: center;
          background: #333;
          color: #fff;
        }
      }
    }

    .sidebar__desc {
      padding-top: 30px;
      font-size: 1.6rem;
      margin: 0;
      opacity: 0.6;
      line-height: 2.8rem;
      margin-bottom: 30px;
    }

    .sidebar__item {
      margin-bottom: 30px;
      h2 {
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 1.8rem;
        word-spacing: 3px;
      }

      .contact__method {
        list-style: none;
        padding-left: 0;
        margin: 10px 0 0 0;
        font-size: 1.6rem;
        line-height: 2.8rem;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          i {
            display: inline-block;
            text-align: center;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            line-height: 20px;
          }

          p {
            margin-bottom: 0;
          }

          .contact__mail a {
            display: inline-block;
            text-decoration: none;
            color: inherit;
          }

          .contact__phone__num {
            a {
              display: block;
              text-decoration: none;
              color: inherit;
            }
          }
        }
      }

      .list__img {
        list-style: none;
        padding-left: 0;
        margin-left: -5px;
        margin-right: -5px;

        .img__item {
          padding-left: 5px;
          padding-right: 5px;
          padding-top: 10px;

          .img__item__link {
            display: block;
            position: relative;

            &:hover {
              &::before {
                opacity: 1;
                visibility: visible;
              }
            }

            &::before {
              content: "";
              position: absolute;
              background: rgba(0, 0, 0, 0.6);
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              visibility: hidden;
              transition: all 0.25s linear;
            }
            img {
              display: block;
              width: 100%;
            }
          }
        }
      }

      .contact__socials__wrapp {
        padding-top: 10px;
        a {
          display: inline-block;
          text-decoration: none;
          color: inherit;
          margin-right: 20px;

          :hover > i {
            transform: translateY(-3px);
          }

          i {
            display: block;
            font-size: 1.8rem;
            line-height: 1.8rem;
            transition: all 0.25s linear;
          }
        }
      }
    }
  }
`;
