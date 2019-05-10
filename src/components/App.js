import React from "react";
import RandomCocktail from "./RandomCocktail";
import Cocktail from "./Cocktail";
import Store from "../Store/Store";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <h1 className='home'>
          <Link to='/'>The Cocktail Directory</Link>
        </h1>
        <Store>
          <Switch>
            <Route exact path='/' component={RandomCocktail} />} />
            <Route path='/cocktail' component={Cocktail} />
          </Switch>
        </Store>
        <div className='footer'>
          <p>
            Created by:{" "}
            <a href='https://singhsterabhi.github.io' target='_blank'>
              singhsterAbhi
            </a>
          </p>
        </div>
      </Router>
    </>
  );
};

export default App;
