import React from "react";
import "./recipe.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Erro404 from "./pages/404-Error";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Recipe() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipe/:id" exact component={SingleRecipe} />
          <Route component={Erro404} />
        </Switch>
      </main>
    </Router>
  );
}

export default Recipe;
