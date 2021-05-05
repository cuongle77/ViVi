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

        &__social {
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

      &__social {
        position: absolute;
        padding-left: 0;
        list-style: none;
        bottom: 40px;
        left: 0;
        right: 0;
        margin: auto;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
        li {
          display: inline-block;
          margin: 0 1.2rem;
          a {
            display: inline-block;
            text-decoration: none;
            transition: all 0.5s;

            &:hover {
              transform: translateY(-5px);
            }

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

  @media (min-width: 740px) and (max-width: 1023px) {
    padding: 50px 0;
  }

  @media (max-width: 739px) {
    padding: 30px 0;
    .section__title {
      margin-bottom: 20px;

      span {
        margin-bottom: 10px;
      }

      h2 {
        font-size: 2.5rem;
      }
    }

    .single__team {
      margin-bottom: 0px;
      .team__img {
        margin-bottom: 10px;
      }

      .team__content {
        h3 {
          font-size: 1.8rem;
        }

        span {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
