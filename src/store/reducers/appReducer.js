import actionsType from "../actions/ationsType";

let initState = {
  homeData: [],
  
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionsType.GET_HOME:
      return {
        ...state,
        homeData: action.homeData
      }

    default:
      return state;
  }
};

export default appReducer;
