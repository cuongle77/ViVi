const stateDefault = {
  testimonialStore: [
    {
      url: "./image/client1.jpg",
      desc:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”",
      name: "Kara Goldberg",
      job: "Director of Festwork",
    },

    {
      url: "./image/client2.jpg",
      desc:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”",
      name: "Richard Romero",
      job: "Director",
    },

    {
      url: "./image/client3.jpg",
      desc:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”",
      name: "Kilva Romero",
      job: "Director",
    },

    {
      url: "./image/client4.jpg",
      desc:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”",
      name: "Juhin Dew",
      job: "Director",
    },

    {
      url: "./image/client5.jpg",
      desc:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”",
      name: "Anna Smith",
      job: "Director",
    },

    {
      url: "./image/client6.jpg",
      desc:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.ipsum dolor sit amet”",
      name: "Lika Romero",
      job: "Director",
    },
  ],
};

export const testimonialReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
