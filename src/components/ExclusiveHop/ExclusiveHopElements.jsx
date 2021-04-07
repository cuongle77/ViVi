import styled from "styled-components";

export const ExclusiveHopContainer = styled.section`
  background: #000;
  background-image: url("./image/exclusive-shop-bg.jpg");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 100;
  overflow: hidden;

  @keyframes rotated {
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: -1;
  }

  .container {
    max-width: 1475px;
  }

  .section__title {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 40px;
    span {
      font-size: 1.6rem;
      font-weight: 700;
      display: block;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 5rem;
      font-weight: 800;
    }
  }

  .exclusvie__img {
    position: relative;
    z-index: 20;
    img {
      max-width: 100%;
      height: auto;
    }

    .exclusvie__img-2 {
      position: absolute;
      top: 25px;
      right: 0;
      z-index: -1;
      animation: rotated 100s linear infinite;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 50%;
      }
    }
  }

  .exclusvie__video__list {
    padding: 40px;
    background-color: #fff;
    .row {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .exclusive__list__img {
      a {
        display: block;
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }

    .exclusive__text {
      h3 {
        margin-bottom: 0;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 15px;
        a {
          font-size: 2rem;
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }
      }

      span {
        font-size: 1.5rem;
        margin-bottom: 15px;
        display: block;
        del {
          margin-right: 10px;
          opacity: 0.7;
        }
      }

      ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 20px;
        li {
          font-size: 1.8rem;
          opacity: 0.7;
          display: inline-block;
          margin-right: 40px;
          &:first-child {
            position: relative;

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: calc(100% + 20px);
              height: 100%;
              width: 1px;
              background: #000;
            }
          }
        }
      }

      button.default__btn {
        font-size: 1rem;
        padding: 10px 20px;
        i {
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding-top: 50px;
    padding-bottom: 50px;
    overflow: hidden;

    .container {
      padding: 0 40px;
    }

    .section__title {
      h2 {
        font-size: 2.5rem;
      }
    }

    .exclusvie__img {
      margin-bottom: 50px;
      .exclusvie__img-2 {
        right: 5px;
      }
    }

    .exclusvie__video__list {
      .exclusive__list__img {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          display: inline-block;
          img {
            max-width: 100%;
            height: auto;
          }
        }
      }

      .exclusive__text {
        text-align: center;
        h3,
        span,
        ul {
          margin-bottom: 10px;
        }
      }
    }
  } ;
`;
