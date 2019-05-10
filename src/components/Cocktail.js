import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Store/Store";
import "./Cocktail.css";

const Cocktail = props => {
  const { setRandomDrink } = useContext(MyContext);
  const [cocktail, setCocktail] = useState();

  useEffect(() => {
    const fetchRandomDrink = async () => {
      await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(d => {
          return d.json();
        })
        .then(data => {
          setRandomDrink(data.drinks[0]);
          setCocktail(data.drinks[0]);
        });
    };

    if (props.location.state) {
      setCocktail(props.location.state.drink);
    } else {
      if (!cocktail) fetchRandomDrink();
    }
  }, []);

  const ingredients = () => {
    let ing = [];
    for (let i = 1; i < 16; i++) {
      if (cocktail[`strIngredient${i}`] !== "") {
        console.log(cocktail[`strIngredient${i}`]);
        console.log(cocktail[`strMeasure${i}`]);
        ing.push(
          <tr key={i}>
            <td>{i + ". " + cocktail[`strIngredient${i}`]}</td>
            <td>{cocktail[`strMeasure${i}`]}</td>
          </tr>
        );
      }
    }
    return ing;
  };

  return (
    <>
      {cocktail ? (
        <div className='cocktail'>
          <h1 className='cocktailName'>{cocktail.strDrink}</h1>{" "}
          <img src={cocktail["strDrinkThumb"]} alt={cocktail["strDrink"]} />
          <div className='details'>
            <div className='ingredients'>
              <p className='heading'>Ingredients ~ </p>
              <table>
                <tbody>{ingredients()}</tbody>
              </table>
            </div>
            <div className='recipie'>
              <p className='heading'>Recipie ~ </p>
              <p>{cocktail["strInstructions"]}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cocktail;
