import styled from "styled-components";

export const SolutionsContainer = styled.section`
  background-color: #fff;

  .what__we__do__content {
    span {
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      display: block;
      margin-bottom: 20px;
      margin-top: -6px;
    }

    h2 {
      font-size: 4.5rem;
      margin-bottom: 30px;
      color: #272b2b;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.3;
    }

    p {
      position: relative;
      margin-left: 100px;
      margin-bottom: 45px;
      font-size: 1.6rem;
      line-height: 1.8;

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

    .brand__wrap {
      margin-left: 100px;
      margin-bottom: 50px;
      .brand {
        a {
          display: inline-block;
          text-decoration: none;
          transition: all 0.5s;

          &:hover {
            transform: translateY(-6px);
          }
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }

    .default__btn {
      margin-left: 100px;
    }
  }

  .what__we__do__item {
    text-align: center;
    border: 1px dashed #676a6a;
    padding: 15px;
    margin-bottom: 30px;
    transition: all 0.5s;

    &:hover {
      transform: translateY(-6px);
    }
    i {
      font-size: 60px;
      margin-bottom: 20px;
      display: block;
      color: #272b2b;
      line-height: 1;
    }

    h3 {
      font-size: 2.2rem;
      margin-bottom: 10px;
      color: #272b2b;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1.3;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 0;
      line-height: 1.8;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding-top: 50px;
    padding-bottom: 20px;
    .what__we__do__content {
      text-align: center;
      margin-bottom: 30px;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }

      p {
        margin-left: 0;
        font-size: 1.5rem;
        line-height: 2.2rem;
        opacity: 0.6;
        margin-bottom: 30px;

        &::before {
          display: none;
        }
      }

      .brand__wrap {
        margin-left: 0px;
        margin-bottom: 30px;
        .brand {
          a {
            display: inline-block;
            text-decoration: none;
            transition: all 0.5s;

            &:hover {
              transform: translateY(-6px);
            }
            img {
              display: block;
              width: 100%;
            }
          }
        }
      }

      .default__btn {
        margin-left: 0px;
      }
    }

    .what__we__do__item {
      margin-top: 0;
    }
  }
`;
