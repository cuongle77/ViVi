import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  .owl-theme .owl-dots {
    position: absolute;
    right: 50px;
    bottom: 50px;
  }

  .owl-theme .owl-nav {
    margin-top: 0;
    display: none;
  }

  .owl-theme .owl-dots .owl-dot span {
    width: 12px;
    height: 12px;
    display: block;
  }

  .hero__sider__item {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

    .d__table {
      width: 100%;
      height: 100%;
      .d__table__cell {
        vertical-align: middle;
        .hero__slider__text {
          text-align: center;
          color: #fff;
          text-transform: uppercase;

          h1 {
            font-size: 8rem;
            font-weight: 800;
            margin-bottom: 0px;
          }

          p {
            font-size: 2rem;
            letter-spacing: 3px;
            line-height: 8rem;
          }
        }
      }
    }
  }

  .social__wrap {
    position: absolute;
    bottom: 50px;
    left: 50px;
    z-index: 1;

    ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;
      display: flex;
      align-items: center;

      .follow__us {
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 700;
        position: relative;
        margin-right: 80px;

        &::before {
          content: "";
          position: absolute;
          left: calc(100% + 12px);
          height: 1px;
          top: 50%;
          /* transform: translateY(-50%); */
          background: #fff;
          width: 50px;
        }
      }
      li {
        display: flex;
        align-items: center;
        a {
          display: inline-block;
          margin-right: 20px;
          text-decoration: none;
          transition: all 0.5s;
          &:hover {
            transform: translateY(-3px);
          }
          i {
            display: block;
            font-size: 1.4rem;
            line-height: 1.4rem;
            color: #fff;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .hero__slider {
      overflow: hidden !important;
    }

    .hero__sider__item {
      height: 100%;
      padding-top: 220px;
      padding-bottom: 200px;

      .d__table {
        .d__table__cell {
          .hero__slider__text {
            h1 {
              font-size: 3rem;
              line-height: 4rem;
            }

            p {
              font-size: 1.4rem;
              line-height: 4rem;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
    .social__wrap {
      left: 0;
      right: 0;
      text-align: center;
      bottom: 140px;

      ul {
        justify-content: center;
      }
    }
  }
`;
