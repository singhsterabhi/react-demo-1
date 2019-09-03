import React from "react";
import "./CocktailThumb.css";
import { Link } from "react-router-dom";

const CocktailThumb = ({ drink }) => {
  return (
    <Link to={{ pathname: `/cocktail/${drink.idDrink}` }}>
      <div className='thumb'>
        <img src={drink["strDrinkThumb"]} alt={drink["strDrink"]} />
        <p className='drinkName'>{drink["strDrink"]}</p>
      </div>
    </Link>
  );
};

export default CocktailThumb;

{
  /* <p className='tags'>
  <span className={`category `}>{drink["strCategory"]}</span>
  <span
    className={`type ${
      drink["strAlcoholic"] === "Alcoholic" ? "alcoholic" : "nonAlcoholic"
    }`}>
    {drink["strAlcoholic"]}
  </span>
</p>; */
}
