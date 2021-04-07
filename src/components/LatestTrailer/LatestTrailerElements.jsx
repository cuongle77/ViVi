import styled from "styled-components";

export const LatestTrailerContainer = styled.section`
  .owl-theme .owl-dots {
    margin-top: 0 !important;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
  }

  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: #383131;
  }

  .latest__trailer__content {
    span {
      font-size: 1.5rem;
      font-weight: 800;
      text-transform: uppercase;
      display: block;
      margin-bottom: 15px;
      margin-top: -6px;
      opacity: 0.7;
    }

    h2 {
      font-size: 3.8rem;
      margin-bottom: 30px;
      color: #272b2b;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 1.3;
    }

    p {
      font-size: 16px;
      position: relative;
      margin-left: 100px;
      margin-bottom: 40px;
      opacity: 0.8;

      &::before {
        content: "";
        position: absolute;
        top: 7px;
        left: -100px;
        width: 70px;
        height: 1px;
        background-color: #272b2b;
      }
    }
  }

  .latest__trailer__item {
    position: relative;

    &:hover {
      .caption {
        transform: scale(1);
      }
    }

    img {
      display: block;
      width: 100%;
    }

    .caption {
    }

    .caption {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(0);
      transition: all 0.5s;
      button {
        display: block;
        border: none;
        outline: none;
        width: 70px;
        height: 70px;
        background: #fff;
        border-radius: 50%;
        text-align: center;
        transition: all 0.5s;

        &:hover {
          background: #f00;
          i {
            color: #fff;
          }
        }

        i {
          display: inline-block;
          color: #000;
          font-size: 2rem;
          line-height: 70px;
          transition: all 0.5s;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding-top: 50px;
    padding-bottom: 50px;

    .owl-theme .owl-dots {
      display: none;
    }

    .latest__trailer__content {
      text-align: center;
      h2 {
        font-size: 2.5rem;
        margin-bottom: 10px;
      }

      p {
        margin-left: 0;
        font-size: 1.6rem;
        line-height: 2.2rem;
        opacity: 0.6;

        &::before {
          display: none;
        }
      }
    }
  }
`;
