import React, { useState, useEffect } from "react";

export const MyContext = React.createContext({});

const Store = ({ children }) => {
  const [randomDrink, setRandomDrink] = useState({});

  // const [cocktail, setCocktail] = useState({});

  const fetchRandomDrink = async () => {
    console.log("mounted");

    const data = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    ).then(d => d.json());
    setRandomDrink(data.drinks[0]);
    console.log(randomDrink);
  };

  useEffect(() => {
    fetchRandomDrink();
  }, []);

  return (
    <MyContext.Provider
      value={{
        randomDrink,
        setRandomDrink
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default Store;
