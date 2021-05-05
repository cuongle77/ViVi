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

  @media (min-width: 1024px) {
    .video__created__wrap {
      position: relative;
      img {
        display: block;
        width: 100%;
      }

      .video__wrap {
        .popup__youtube {
          i {
          }
        }

        h2 {
          left: 60%;
        }
      }
    }
  }

  @media (min-width: 740px) and (max-width: 1023px) {
    padding: 50px 0;
    .video__created__wrap {
      .video__wrap {
        .modal-video {
          .modal-video-body {
            .modal-video-inner {
              .modal-video-movie-wrap {
                width: 90%;
                margin: 0 auto;

                .modal-video-close-btn {
                  right: 0;
                }
              }
            }
          }
        }

        .popup__youtube {
          i {
            font-size: 5rem;
          }
        }

        h2 {
          font-size: 2rem;
          top: 0;
          left: 0%;
          right: 0;
          text-align: center;
          width: auto;
        }
      }
    }
  }

  @media (max-width: 739px) {
    padding: 50px 0;
    .video__created__wrap {
      padding: 0 12px;
      .video__wrap {
        .modal-video {
          .modal-video-body {
            .modal-video-inner {
              .modal-video-movie-wrap {
                width: 90%;
                margin: 0 auto;

                .modal-video-close-btn {
                  right: 0;
                }
              }
            }
          }
        }

        .popup__youtube {
          i {
            font-size: 5rem;
          }
        }

        h2 {
          font-size: 1.5rem;
          top: 0;
          left: 0%;
          right: 0;
          text-align: center;
          width: auto;
        }
      }
    }
  }
`;
