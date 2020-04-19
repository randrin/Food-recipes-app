import React, { Component } from "react";
import { recipeData } from "./../assets/data/tempDetails";
import { Link } from "react-router-dom";
import "../recipe.scss";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipeData,
      loading: true,
    };
  }
  render() {
    const {
      image_url,
      ingredients,
      publisher_url,
      publisher,
      source_url,
      title,
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <Link to="/recipes" className="text-capitalize btn btn-danger">
                <i className="fa fa-chevron-left"></i> Back to Recipes
              </Link>
              <img
                src={image_url}
                alt={title}
                className="d-block w-100 mt-5 recipe-single"
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-capitalize recipe-slanted">{publisher}</h6>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2 mx-2 text-capitalize"
              >
                <i className="fa fa-globe"></i> Publish Url
              </a>
              <a
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger mt-2 mx-2 text-capitalize"
              >
                <i className="fa fa-github-alt"></i> Source Url
              </a>
              <ul className="list-group mt-4">
                <h4 className="mt-4 mb-3">Ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <li key={index} className="list-group-item recipe-slanted">
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
