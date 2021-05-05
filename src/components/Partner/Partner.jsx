import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { PartnerContainer } from "./PartnerElements";
import { useSelector } from "react-redux";

const Partner = () => {
  const { partnerStoreHome } = useSelector((state) => state.partnerReducer);

  const settings = {
    responsvie: {
      0: {
        items: 3,
      },

      414: {
        items: 3,
      },

      540: {
        items: 4,
      },

      1024: {
        items: 6,
      },
    },
  };
  return (
    <>
      <PartnerContainer className="ptb-100">
        <div className="grid wide">
          <OwlCarousel
            className="owl-theme"
            autoplay
            smartSpeed={1000}
            autoplayHoverPause
            responsiveClass={true}
            responsive={settings.responsvie}
            loop
            margin={20}
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
