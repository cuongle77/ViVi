import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: #fff;
  position: relative;
  overflow: hidden;

  .about__content__wrap {
    background-image: url("./image/about-img1.jpg");
    background-position: 100%;
    background-repeat: no-repeat;
    height: 522px;

    .about__content {
      margin-top: 50px;

      span {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        display: block;
        margin-bottom: 20px;
        margin-top: -6px;
      }

      h2 {
        margin-bottom: 30px;
        font-size: 5rem;
        color: #272b2b;
        font-weight: 800;
        text-transform: uppercase;
        line-height: 1.3;
      }

      p {
        position: relative;
        margin-left: 100px;
        margin-bottom: 0;
        font-size: 1.6rem;
        line-height: 1.8;
        padding-left: 0;

        &::before {
          content: "";
          position: absolute;
          top: 10px;
          left: -100px;
          width: 70px;
          height: 1px;
          background-color: #272b2b;
        }
      }

      .default__btn {
        margin-top: 40px;
        margin-left: 100px;
      }
    }

    .about__img {
      display: none;

      img {
        max-width: 100%;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
  }

  @media (min-width: 740px) and (max-width: 1023px) {
    padding: 0px 0 50px;
    .about__content__wrap {
      background-image: unset;
      height: auto;

      .about__content {
        text-align: center;

        span {
        }

        h2 {
          font-size: 2.5rem;
        }

        p {
          margin-left: 0px;
          font-size: 1.6rem;
          opacity: 0.5;

          &::before {
            display: none;
          }
        }

        .default__btn {
          margin-left: 0px;
        }
      }

      .about__img {
        display: block;
        margin-top: 40px;
      }
    }
  }

  @media (max-width: 739px) {
    padding: 0px 0 30px;
    .about__content__wrap {
      background-image: unset;
      height: auto;

      .about__content {
        text-align: center;
        padding: 0 12px;

        h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        p {
          margin-left: 0px;
          font-size: 1.4rem;

          &::before {
            display: none;
          }
        }

        .default__btn {
          font-size: 1.2rem;
          margin-left: 0px;
          margin-top: 20px;
          padding: 1.2rem 2rem;
        }
      }

      .about__img {
        padding: 0 12px;
        display: block;
        margin-top: 20px;
      }
    }
  }
`;
