import React from "react";
import "./CocktailThumb.css";
import { Link } from "react-router-dom";

const CocktailThumb = ({ drink }) => {
  return (
    <Link to={{ pathname: "/cocktail", state: { drink } }}>
      <div className='thumb'>
        <img src={drink["strDrinkThumb"]} alt={drink["strDrink"]} />
        <p className='drinkName'>{drink["strDrink"]}</p>
        <p className='tags'>
          <span className={`category `}>{drink["strCategory"]}</span>
          <span
            className={`type ${
              drink["strAlcoholic"] === "Alcoholic"
                ? "alcoholic"
                : "nonAlcoholic"
            }`}>
            {drink["strAlcoholic"]}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default CocktailThumb;
