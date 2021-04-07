import styled from "styled-components";

export const BlogContainer = styled.section`
  .section__title {
    text-align: center;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 50px;
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

  .single__blog {
    transition: all 0.5s;
    &:hover {
      transform: translateY(-3px);
    }

    .blog__img {
      display: block;
      text-decoration: none;
      img {
        max-width: 100%;
        height: auto;
      }
    }

    .blog__content {
      margin-top: 15px;
      ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 15px;

        li {
          margin-right: 30px;
          font-size: 1.5rem;
          opacity: 0.7;
          text-transform: capitalize;
          i {
            margin-right: 5px;
          }
          a {
            display: inline-block;
            text-decoration: none;
            color: inherit;
          }

          &:first-child {
            position: relative;

            &::before {
              content: "";
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: calc(100% + 12px);
              width: 1px;
              height: 15px;
              background-color: #000;
            }
          }
        }
      }

      a {
        display: block;
        text-decoration: none;
        color: inherit;

        h3 {
          font-size: 1.8rem;
          text-transform: uppercase;
          font-weight: 800;
          line-height: 3rem;
          margin-bottom: 15px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 100%;
          width: 100%;
        }
      }

      p {
        font-size: 1.5rem;
        line-height: 2.5rem;
        opacity: 0.6;
      }

      .learn__more {
        font-size: 1.5rem;
        display: inline-block;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        transition: all 0.5s;

        &:hover {
          letter-spacing: 3px;
        }
      }
    }
  }
`;
