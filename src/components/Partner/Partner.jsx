import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { PartnerContainer } from "./PartnerElements";
import { useSelector } from "react-redux";

const Partner = () => {
  const { partnerStoreHome } = useSelector((state) => state.partnerReducer);
  return (
    <>
      <PartnerContainer className="ptb-100">
        <div className="container">
          <OwlCarousel
            className="owl-theme"
            autoplay
            smartSpeed={1000}
            autoplayHoverPause
            items={6}
            loop
            margin={30}
          >
            {partnerStoreHome?.map((item, index) => {
              return (
                <div key={index} className="partner__item">
                  <a href="##">
                    <img src={item.url} alt="Img" />
                  </a>
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </PartnerContainer>
    </>
  );
};

export default Partner;
