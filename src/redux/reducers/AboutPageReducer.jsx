const stateDefault = {
  productionStore: [
    {
      name: "Video Production",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
      iconImg: "flaticon-film-editing",
    },

    {
      name: "Advertising",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
      iconImg: "flaticon-advertising",
    },

    {
      name: "Documentaries",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
      iconImg: "flaticon-entertainment",
    },

    {
      name: "TV Shows",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
      iconImg: "flaticon-film-editing",
    },

    {
      name: "Movies",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
      iconImg: "flaticon-advertising",
    },

    {
      name: "Music Videos",
      desc:
        "Lorem ipsum dolor sit, amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.",
      iconImg: "flaticon-entertainment",
    },
  ],
};

export const aboutPageReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
