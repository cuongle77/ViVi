import styled from "styled-components";

export const GetInTouchContainer = styled.section`
  background-color: #000;
  background-image: url("./image/get-in-touch-bg.jpg");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 100;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }

  .get__in__touch__content {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    h2 {
      font-size: 4.5rem;
      font-weight: 700;
    }

    p {
      font-size: 2rem;
      font-weight: 700;
      margin: 20px 0 30px;
    }

    .default__btn {
      padding: 15px 30px;
      &:hover {
        border-color: #272b2b !important;
        background-color: #272b2b;
      }
    }
  }

  @media (max-width: 739px) {
    padding-top: 30px;
    padding-bottom: 30px;

    .get__in__touch__content {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.4rem;
        margin: 20px 0 20px;
      }

      .default__btn {
        font-size: 1.2rem;
        padding: 1.2rem 2rem;

        &:hover {
          border-color: #272b2b !important;
          background-color: #272b2b;
        }
      }
    }
  }
`;
