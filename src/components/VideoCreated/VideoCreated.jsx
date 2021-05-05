import React, { useState } from "react";
import { VideoCreatedContainer } from "./VideoCreatedElements";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import Fade from "react-reveal/Fade";

const VideoCreated = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <VideoCreatedContainer className="ptb-100">
        <div className="grid wide">
          <div className="video__created__wrap">
            <Fade left>
              <img src="./image/video-created-img.jpg" alt="" />
            </Fade>
            <div className="video__wrap">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="bk7McNUjWgw"
                onClose={() => setOpen(false)}
              />
              <button className="popup__youtube" onClick={() => setOpen(true)}>
                <i className="far fa-play-circle"></i>
              </button>
              <Fade right>
                <h2>Video Created By Vivi</h2>
              </Fade>
            </div>
          </div>
        </div>
      </VideoCreatedContainer>
    </>
  );
};

export default VideoCreated;
