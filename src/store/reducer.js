import * as actionTypes from "./actionTypes";

const initialState = {
  randomDrink: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
