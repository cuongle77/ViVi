const stateDefault = {
  partnerStoreHome: [
    { url: "./image/partner1.png" },
    { url: "./image/partner2.png" },
    { url: "./image/partner3.png" },
    { url: "./image/partner4.png" },
    { url: "./image/partner5.png" },
    { url: "./image/partner6.png" },
  ],

  partnerStoreAbout: [
    { url: "./image/partner7.png" },
    { url: "./image/partner8.png" },
    { url: "./image/partner9.png" },
    { url: "./image/partner10.png" },
    { url: "./image/partner11.png" },
    { url: "./image/partner12.png" },
  ],
};

export const partnerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
