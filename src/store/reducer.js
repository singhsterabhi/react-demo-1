import * as actionTypes from "./actionTypes";

const initialState = {
  randomDrink: null,
  cocktail: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COCKTAILS:
      return {
        ...state,
        cocktail: action.data
      };
    case actionTypes.SET_RANDOM_DRINK:
      return {
        ...state,
        randomDrink: action.data
      };
    default:
      return state;
  }
};

export default reducer;
