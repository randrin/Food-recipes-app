import React, { Component } from "react";
import Recipe from "../Recipes/Recipe";
import "./Recipes.scss";

export default class Recipes extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto mt-5 text-center mt-5">
              <h1 className="text-capitalize recipe-text-gray recipe-slanted">
                Recipes List
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            {recipes.map((recipe) => (
              <Recipe key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
