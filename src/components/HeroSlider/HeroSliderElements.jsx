import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;

  .hero__sider__item {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

    .d__table {
      width: 100%;
      height: 100%;

      .d__table__cell {
        vertical-align: middle;

        .hero__slider__text {
          text-align: center;
          color: #fff;
          text-transform: uppercase;

          h1 {
            font-size: 8rem;
            font-weight: 800;
            margin-bottom: 0px;
          }

          p {
            font-size: 2rem;
            letter-spacing: 3px;
            line-height: 8rem;
          }
        }
      }
    }
  }
`;
