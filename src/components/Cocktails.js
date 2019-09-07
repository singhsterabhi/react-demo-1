import React, { useEffect } from "react";

import { connect } from "react-redux";

import * as actions from "../store/actions";

import CocktailThumb from "./CocktailThumb";
import Spinner from "./Spinner";
import "./Cocktails.css";

const Cocktails = props => {
  const content = props.match.params.content;
  const search = props.match.params.search.replace(/__/g, "_/_");
  console.log(search);

  useEffect(() => {
    props.fetchCocktails(content, search);
  }, [props, search, content]);

  return (
    <div className="cocktails">
      {props.cocktails ? (
        <>
          {props.cocktails.map(m => {
            return <CocktailThumb key={m.idDrink} drink={m} />;
          })}
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cocktails: state.cocktails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCocktails: (c, s) => dispatch(actions.fetchCocktails(c, s))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cocktails);
