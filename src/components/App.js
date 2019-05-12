import React from "react";
import Home from "./Home";
import Cocktail from "./Cocktail";
import Cocktails from "./Cocktails";
import Store from "../Store/Store";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1 className='home'>
        <Link to='/'>The Cocktail Directory</Link>
      </h1>
      <Store>
        <Switch>
          <Route exact path='/' component={Home} />} />
          <Route path='/cocktail/:id' component={Cocktail} />
          <Route path='/cocktails/:content/:search' component={Cocktails} />
        </Switch>
      </Store>
      <div className='footer'>
        <p>
          Created by:{" "}
          <a href='https://singhsterabhi.github.io' target='_blank' rel="noopener noreferrer">
            singhsterAbhi
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
