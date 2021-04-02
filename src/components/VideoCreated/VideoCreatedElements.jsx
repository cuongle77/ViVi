import styled from "styled-components";

export const VideoCreatedContainer = styled.section`
  position: relative;
  background-image: url("./image/video-created-bg.jpg");

  .video__created__wrap {
    position: relative;
    img {
      display: block;
      width: 100%;
    }

    .video__wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .popup__youtube {
        display: inline-block;
        text-decoration: none;
        i {
          display: block;
          color: #838b8b;
          font-size: 10rem;
          text-align: center;
          transition: color 0.25s linear;
        }

        &:hover > i {
          color: #fff;
        }
      }

      h2 {
        position: absolute;
        margin-bottom: 0;
        left: 83%;
        top: 10%;
        color: #fff;
        text-transform: uppercase;
        font-size: 4.5rem;
        font-weight: 800;
        width: 395px;
      }
    }
  }
`;
