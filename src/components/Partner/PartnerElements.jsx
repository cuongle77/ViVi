import styled from "styled-components";

export const PartnerContainer = styled.section`
  background-color: #000;
  background-image: url("./image/partner-bg.jpg");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
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

  .owl-dots {
    display: none;
  }

  .partner__item {
    text-align: center;
    a {
      display: inline-block;
      text-decoration: none;
      img {
        width: unset;
        margin: auto;
      }
    }
  }

  @media (min-width: 740px) and (max-width: 1023px) {
    padding: 50px 0;
  }

  @media (max-width: 739px) {
    padding: 30px 0;

    .partner__item {
      a {
        img {
          max-width: 80%;
        }
      }
    }
  }
`;
