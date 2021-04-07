const stateDefault = {
  latestTrailerStore: [
    {
      url: "./image/latest-trailer1.jpg",
    },
    {
      url: "./image/latest-trailer2.jpg",
    },
    {
      url: "./image/latest-trailer3.jpg",
    },
    {
      url: "./image/latest-trailer4.jpg",
    },
    {
      url: "./image/latest-trailer5.jpg",
    },
    {
      url: "./image/latest-trailer6.jpg",
    },
  ],
};

export const latestTrailerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
