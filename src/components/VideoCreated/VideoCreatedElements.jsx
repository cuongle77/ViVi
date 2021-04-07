import styled from "styled-components";

export const VideoCreatedContainer = styled.section`
  position: relative;
  background-image: url("./image/video-created-bg.jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

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
        display: block;
        background-color: transparent;
        border: none;
        outline: none;
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
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .modal-video-body {
      padding: 0 40px;
    }
    .video__created__wrap {
      .video__wrap {
        h2 {
          font-size: 2.2rem;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          opacity: 0.8;
          text-align: center;
        }
      }
    }
  }
`;
