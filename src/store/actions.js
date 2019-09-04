import * as actionTypes from "./actionTypes";

export const setRandomDrink = data => {
  return {
    type: actionTypes.SET_RANDOM_DRINK,
    data
  };
};

export const fetchRandomDrink = () => async dispatch => {
  const data = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  ).then(d => d.json());
  dispatch(setRandomDrink(data.drinks[0]));
};
