const stateDefault = {
  teamStore: [
    {
      url: "./image/team1.jpg",
      name: "Phyllis Trimble",
      job: "Director, Producer",
    },
    {
      url: "./image/team2.jpg",
      name: "Lorna Smith",
      job: "Movie Editor",
    },
    {
      url: "./image/team3.jpg",
      name: "Eldon B. Rice",
      job: "Movie Composer",
    },
    {
      url: "./image/team4.jpg",
      name: "Mike Tucker",
      job: "Cinematographer",
    },
    {
      url: "./image/team5.jpg",
      name: "Emma Wilson",
      job: "Movie Director",
    },
  ],
};

export const teamReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TEAM_DATA": {
      state.teamStore = [...action.teamStore];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
