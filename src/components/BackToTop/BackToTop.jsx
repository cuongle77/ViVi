import React, { useState } from "react";
import { BackToTopContainer } from "./BackToTopElements";

const BackToTop = () => {
  let [toTop, setToTop] = useState(false);
  const handleBtnHidden = () => {
    if (window.pageYOffset === 0) {
      setToTop(true);
    } else if (window.pageYOffset > 1000) {
      setToTop(false);
    }
  };
  window.addEventListener("DOMContentLoaded", handleBtnHidden);
  window.addEventListener("scroll", handleBtnHidden);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BackToTopContainer toTop={toTop} onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </BackToTopContainer>
    </>
  );
};

export default BackToTop;
