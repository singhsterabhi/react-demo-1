import React, { useEffect } from "react";

import { connect } from "react-redux";

import * as actions from "../store/actions";

import "./Cocktail.css";

const Cocktail = props => {
  useEffect(() => {
    if (props["randomDrink"]) {
      props.setCocktail(props["randomDrink"]);
    } else {
      props.fetchCocktail(props.match.params.id);
    }
  }, [props]);

  const ingredients = () => {
    let ing = [];
    for (let i = 1; i < 16; i++) {
      if (
        props.cocktail[`strIngredient${i}`] !== "" &&
        props.cocktail[`strIngredient${i}`] !== null
      ) {
        ing.push(
          <tr key={i}>
            <td>{i + ". " + props.cocktail[`strIngredient${i}`]}</td>
            <td>{props.cocktail[`strMeasure${i}`]}</td>
          </tr>
        );
      }
    }
    return ing;
  };

  return (
    <>
      <div className="cocktail">
        {props.cocktail ? (
          <>
            <h1 className="cocktailName">{props.cocktail.strDrink}</h1>{" "}
            <img
              src={props.cocktail["strDrinkThumb"]}
              alt={props.cocktail["strDrink"]}
            />
            <div className="details">
              <div className="ingredients">
                <p className="heading">Ingredients ~ </p>
                <table>
                  <tbody>{ingredients()}</tbody>
                </table>
              </div>
              <div className="recipie">
                <p className="heading">Recipie ~ </p>
                <p>{props.cocktail["strInstructions"]}</p>
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

const mapStateToProps = state => {
  return {
    cocktail: state.cocktail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCocktail: id => dispatch(actions.fetchCocktail(id)),
    setCocktail: cocktail => dispatch(actions.setCocktail(cocktail))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cocktail);
