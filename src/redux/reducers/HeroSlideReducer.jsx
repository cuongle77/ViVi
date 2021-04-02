const stateDefault = {
  arrHeroSlide: [
    {
      url: "./image/main-slider1.jpg",
      title: "WE MAKE A AWESOME BRANDED VIDEOS",
      description: "VIVI IS A HIGH-QUALITY VIDEO PRODUCTION HOUSE!",
    },

    {
      url: "./image/main-slider2.jpg",
      title: "WE WORK GLOBALLY BRILLIANTLY DONE",
      description: "VIVI IS A HIGH-QUALITY VIDEO PRODUCTION HOUSE!",
    },

    {
      url: "./image/main-slider3.jpg",
      title: "INTRODUCING THE NEXT LEVEL OF VIDEO PRODUCTION",
      description: "VIVI IS A HIGH-QUALITY VIDEO PRODUCTION HOUSE!",
    },
  ],
};

export const heroSlideReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
