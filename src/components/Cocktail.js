import React, { useEffect, useState } from "react";
import "./Cocktail.css";

const Cocktail = props => {
  const [cocktail, setCocktail] = useState();
  console.log(props.match);
  console.log(props.randomDrink);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${
          props.match.params.id
        }`
      )
        .then(d => {
          return d.json();
        })
        .then(data => {
          setCocktail(data.drinks[0]);
        });
    };

    if (props["randomDrink"]) {
      console.log("homepage");
      setCocktail(props["randomDrink"]);
    } else {
      fetchData();
    }
  }, [props]);

  const ingredients = () => {
    let ing = [];
    for (let i = 1; i < 16; i++) {
      if (
        cocktail[`strIngredient${i}`] !== "" &&
        cocktail[`strIngredient${i}`] !== null
      ) {
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
      <div className='cocktail'>
        {cocktail ? (
          <>
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
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Cocktail;
