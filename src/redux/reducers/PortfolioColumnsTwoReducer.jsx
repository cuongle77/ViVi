const stateDefault = {
  portfolioColumnsTwoStore: [
    {
      url: "./image/portfolio1.jpg",
      type: "Action",
      context: "fighting club",
    },
    {
      url: "./image/portfolio2.jpg",
      type: "Shooting",
      context: "in the time of the shooting",
    },
    {
      url: "./image/portfolio3.jpg",
      type: "Technology",
      context: "deep sea",
    },
    {
      url: "./image/portfolio4.jpg",
      type: "Horror",
      context: "horror night",
    },
    {
      url: "./image/portfolio5.jpg",
      type: "Musical",
      context: "music video",
    },
    {
      url: "./image/portfolio6.jpg",
      type: "Art",
      context: "travelling world",
    },
    {
      url: "./image/portfolio7.jpg",
      type: "Studio",
      context: "shooting spot",
    },
    {
      url: "./image/portfolio8.jpg",
      type: "Documentary",
      context: "journey by train",
    },
  ],
};

export const portfolioColumnsTwoReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
