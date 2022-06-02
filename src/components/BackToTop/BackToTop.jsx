import React, { useState } from "react";
import { useEffect } from "react";
import { BackToTopContainer } from "./BackToTopElements";

const BackToTop = () => {
  let [isShowToTop, setIsShowToTop] = useState(false);

  useEffect(() => {
    const handleBtnHidden = () => {
      if (window.pageYOffset === 0) {
        setIsShowToTop(false);
      } else if (window.pageYOffset > 1000) {
        setIsShowToTop(true);
      }
    };
    window.addEventListener("scroll", handleBtnHidden);

    return () => {
      window.removeEventListener('scroll', handleBtnHidden)
    }
  }, [isShowToTop])



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BackToTopContainer show={isShowToTop} onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </BackToTopContainer>
    </>
  );
};

export default BackToTop;
