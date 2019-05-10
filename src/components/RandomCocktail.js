import React, { useContext } from "react";
import { MyContext } from "../Store/Store";
import CocktailThumb from "./CocktailThumb";

const RandomCocktail = props => {
  const { randomDrink } = useContext(MyContext);
  console.log(randomDrink)
  return <CocktailThumb drink={randomDrink} />;
};

export default RandomCocktail;
