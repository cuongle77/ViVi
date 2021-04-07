const stateDefault = {
  blogStore: [
    {
      url: "./image/blog1.jpg",
      name: "admin",
      release: "17/7/2020",
      blogName: "Video Production Services Your Business Must Have",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua sit amet consectetur.",
    },
    {
      url: "./image/blog2.jpg",
      name: "admin",
      release: "18/7/2020",
      blogName: "Why You Need To Hire top className Video Production company",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua sit amet consectetur.",
    },
    {
      url: "./image/blog3.jpg",
      name: "admin",
      release: "19/7/2020",
      blogName: "Choosing A Video Location For Your Next Project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua sit amet consectetur.",
    },
  ],
};

export const blogReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
