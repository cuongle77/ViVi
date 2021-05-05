import styled from "styled-components";

export const FooterTop = styled.footer`
  background: #3333;
  background-image: url("./image/footer-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .single__widget {
    color: #fff;
    .logo {
      a {
        display: block;
        text-decoration: none;
        img {
          display: block;
          max-width: 100%;
        }
      }
    }

    h3 {
      margin: 40px 0;
    }

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      input {
        background: transparent;
        display: block;
        font-size: 1.6rem;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        color: #fff;
        padding: 8px 0px;
        width: 100%;
      }

      button {
        border: none;
        outline: none;
        background: transparent;
        position: absolute;
        right: 0;
        i {
          color: #fff;
          font-size: 1.6rem;
          line-height: 1.6rem;
        }
      }
    }

    .contact__social {
      margin-top: 30px;
      a {
        display: inline-block;
        margin-right: 15px;
        text-decoration: none;
        i {
          display: block;
          color: #7f7979;
          font-size: 1.8rem;
          line-height: 40px;
          width: 40px;
          height: 40px;
          text-align: center;
          border: 1px solid #7f7979;
          border-radius: 50%;
          transition: all 0.25s linear;
        }

        &:hover > i {
          color: #fff;
          border: 1px solid #fff;
        }
      }
    }

    h2 {
      margin-bottom: 30px;
      padding-bottom: 10px;
      border-bottom: 1px solid #2a2f2f;
    }

    .contact__method {
      list-style: none;
      padding-left: 0;
      margin: 10px 0 0 0;
      font-size: 1.4rem;
      line-height: 2.4rem;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        i {
          display: inline-block;
          text-align: center;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          line-height: 20px;
        }

        p {
          margin-bottom: 0;
        }

        .contact__mail a,
        .contact__phone__num > a {
          display: block;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.25s linear;

          &:hover {
            opacity: 0.5;
          }
        }
      }
    }

    .list__additional__links {
      list-style: none;
      padding-left: 0;

      li {
        a {
          display: block;
          text-decoration: none;
          color: #fff;
          font-size: 1.4rem;
          margin-bottom: 20px;
          padding-left: 20px;
          position: relative;
          transition: color 0.25s linear;

          &:hover {
            color: #676a6a;
          }

          &::before {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            height: 5px;
            width: 5px;
            background-color: #fff;
          }
        }
      }
    }

    .instagram {
      list-style: none;
      padding-left: 0;

      li {
        padding-left: 5px;
        padding-right: 5px;
        a {
          display: block;
          padding-bottom: 10px;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 739px) {
    padding: 0px 12px 40px;

    .single__widget {
      padding-top: 50px;

      h3 {
        margin: 20px 0;
      }

      h2 {
        margin-bottom: 20px;
      }

      form {
        input {
          font-size: 1.4rem;
        }
      }

      .contact__social {
        margin-top: 20px;
        a {
          margin-right: 10px;
          i {
            font-size: 1.5rem;
            width: 30px;
            height: 30px;
            line-height: 30px;
          }
        }
      }

      .instagram {
        li {
          a {
            img {
              width: 85%;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }
`;

export const FooterBottom = styled.footer`
  border-top: 1px solid #2a2f2f;
  background-color: #020607;
  padding-top: 30px;
  padding-bottom: 30px;

  .copy__right__wrap {
    text-align: center;
    p {
      color: #676a6a;
      font-size: 1.6rem;
      margin-bottom: 0;
      word-spacing: 2px;
      letter-spacing: 1px;

      a {
        color: #676a6a;
        display: inline-block;
        text-decoration: none;
        transition: color 0.25s linear;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 739px) {
    .copy__right__wrap {
      p {
        font-size: 1.4rem;
        word-spacing: 0px;
        letter-spacing: 0px;
        a {
        }
      }
    }
  }
`;
