import React, { useState } from "react";
import Search from "./Search";
import Cocktail from "./Cocktail";
import "./Home.css";

const Home = () => {
  const [randomDrink, setRandomDrink] = useState(false);

  const fetchRandomDrink = async () => {
    console.log("mounted");

    const data = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    ).then(d => d.json());
    setRandomDrink(data.drinks[0]);
  };

  return (
    <>
      <div className='main'>
        <Search />
        <hr/>
        <button className="random" onClick={fetchRandomDrink}>Random Drink</button>
        {randomDrink ? <Cocktail randomDrink={randomDrink} /> : ""}
      </div>
    </>
  );
};

export default Home;
