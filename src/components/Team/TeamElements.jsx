import styled from "styled-components";

export const TeamContainer = styled.section`
  .section__title {
    text-align: center;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 50px;
    overflow: hidden;
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

  .single__team {
    &:hover {
      .team__img {
        &::before {
          opacity: 1;
        }

        .social {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    .team__img {
      position: relative;
      margin-bottom: 25px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(transparent, #000);
        opacity: 0;
        transition: all 0.5s;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      .social {
        position: absolute;
        padding-left: 0;
        list-style: none;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
        li {
          display: inline-block;
          a {
            display: inline-block;
            text-decoration: none;
            margin: 20px 15px;
            i {
              font-size: 2rem;
              color: #fff;
              display: block;
            }
          }
        }
      }
    }

    .team__content {
      text-align: center;

      h3 {
        font-size: 2.5rem;
        text-transform: uppercase;
        font-weight: 800;
      }

      span {
        font-size: 1.6rem;
        opacity: 0.6;
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 991px) {
    .responsive {
      color: red;
    }
  }
`;
