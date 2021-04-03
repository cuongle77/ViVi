const stateDefault = {
  productArrr: [
    {
      id: 1,
      year: 2000,
      url: "./image/products-img.jpg",
      movieTheme: "Film Festival",
      movieName: "Award Winning Movies “Once Upon a Time”",
      description:
        "Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.",
    },
    {
      id: 2,
      year: 2001,
      url: "./image/products-img-2.jpg",
      movieTheme: "Vivi Bio",
      movieName: "Award Winning Movies “Once Upon a Time”",
      description:
        "Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.",
    },
    {
      id: 3,
      year: 2002,
      url: "./image/products-img-4.jpg",
      movieTheme: "Vivi Bio",
      movieName: "Award Winning Movies “Once Upon a Time”",
      description:
        "Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.",
    },
    {
      id: 4,
      year: 2003,
      url: "./image/products-img-4.jpg",
      movieTheme: "Vivi Bio",
      movieName: "Award Winning Movies “Once Upon a Time”",
      description:
        "Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.",
    },
    {
      id: 5,
      year: 2004,
      url: "./image/products-img-3.jpg",
      movieTheme: "Vivi Bio",
      movieName: "Award Winning Movies “Once Upon a Time”",
      description:
        "Video production work with producing video content. It is the analogical of film making, but the images are digitally recorded instead of film stock. There are three levels of video production: production, pre-production and post-production the images are.",
    },
  ],
};

export const productReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
