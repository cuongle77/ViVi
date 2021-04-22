import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: #fff;
  position: relative;

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
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding-top: 50px;
    padding-bottom: 50px;

    .about__content__wrap {
      background-image: unset;
      height: auto;

      .about__content {
        margin-top: 0px;
        text-align: center;
        margin-bottom: 40px;

        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        p {
          margin-left: 0;
          font-size: 1.5rem;
          line-height: 2.2rem;
          opacity: 0.6;

          &::before {
            display: none;
          }
        }

        .default__btn {
          margin-top: 30px;
          margin-left: 0px;
        }
      }

      .about__img {
        display: block;
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
`;
