const stateDefault = {
  exclusiveHopStore: [
    {
      code: "001",
      url: "./image/product1.jpg",
      name: "deep sea",
      oldPrice: 59.1,
      newPrice: 57.1,
      director: "Director: Peter Spider",
      release: "Release: 01-01-2018",
    },
    {
      code: "002",
      url: "./image/product2.jpg",
      name: "the gdudg",
      oldPrice: 49.2,
      newPrice: 47.2,
      director: "Director: Peter Spider",
      release: "Release: 01-01-2018",
    },
    {
      code: "003",
      url: "./image/product3.jpg",
      name: "deep sea",
      oldPrice: 39.3,
      newPrice: 37.3,
      director: "Director: Peter Spider",
      release: "Release: 01-01-2018",
    },
    {
      code: "004",
      url: "./image/product4.jpg",
      name: "deep sea",
      oldPrice: 55.1,
      newPrice: 53.1,
      director: "Director: Peter Spider",
      release: "Release: 01-01-2018",
    },
  ],
};

export const exclusiveHopReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
