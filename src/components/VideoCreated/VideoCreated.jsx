import React, { useState } from "react";
import { VideoCreatedContainer } from "./VideoCreatedElements";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const VideoCreated = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <VideoCreatedContainer className="ptb-100">
        <div className="container">
          <div className="video__created__wrap">
            <img src="./image/video-created-img.jpg" alt="" />
            <div className="video__wrap">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="bk7McNUjWgw"
                onClose={() => setOpen(false)}
              />
              <a
                href="###"
                className="popup__youtube"
                onClick={() => setOpen(true)}
              >
                <i className="far fa-play-circle"></i>
              </a>
              <h2>Video Created By Vivi</h2>
            </div>
          </div>
        </div>
      </VideoCreatedContainer>
    </>
  );
};

export default VideoCreated;
