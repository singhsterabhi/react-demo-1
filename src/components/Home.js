import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";

import Search from "./Search";
import Cocktail from "./Cocktail";
import "./Home.css";

const Home = props => {
  // const [randomDrink, setRandomDrink] = useState(false);

  // const fetchRandomDrink = async () => {
  //   console.log("mounted");

  //   const data = await fetch(
  //     "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  //   ).then(d => d.json());
  //   setRandomDrink(data.drinks[0]);
  // };

  return (
    <>
      <div className="main">
        <Search />
        <hr />
        <button className="random" onClick={props.fetchRandomDrink}>
          Random Drink
        </button>
        {props.randomDrink ? <Cocktail randomDrink={props.randomDrink} /> : ""}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    randomDrink: state.randomDrink
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRandomDrink: () => dispatch(actions.fetchRandomDrink())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
