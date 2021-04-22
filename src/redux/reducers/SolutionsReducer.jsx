const stateDefault = {
  solutionBrand: [
    { image: "./image/brand1.png" },
    { image: "./image/brand2.png" },
    { image: "./image/brand3.png" },
  ],

  solutionBrandTwo: [
    {
      iconUrl: "flaticon-film-editing",
      title: "Pre-Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
    },
    {
      iconUrl: "flaticon-film-editing-1",
      title: "Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
    },
    {
      iconUrl: "flaticon-advertising",
      title: "Post-Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
    },
    {
      iconUrl: "flaticon-entertainment",
      title: "Conversion",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.",
    },
  ],
};

export const solutionsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
