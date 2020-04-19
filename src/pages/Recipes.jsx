import React, { Component } from "react";
import RecipesList from "../components/Recipes/Recipes";
import RecipeSearch from "../components/Search/Search";
import { recipeData } from "../assets/data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeData,
      search: "",
      url: `www.food2fork.com/api/search?key=6e326558f61a419968fca8c6efe0be18`,
      base_url: `www.food2fork.com/api/search?key=6e326558f61a419968fca8c6efe0be18`,
      query: "&q=",
      error: "",
    };
    this.getRecipes = this.getRecipes.bind(this);
  }

  async getRecipes() {
    try {
      const recipes = await fetch(this.state.url);
      const recipesJson = await recipes.json();
      if (recipesJson.recipes.length === 0) {
        this.setState({
          error: "Your search don't retrieve any recipes. Try again !!!",
        });
      } else {
        this.setState({
          recipes: recipesJson.recipes,
          error: "",
        });
      }
    } catch (error) {
      console.log("Recipes - getRecipes Error: ", error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: "",
      },
      () => this.getRecipes()
    );
  };

  render() {
    return (
      <>
        <RecipeSearch
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <div className="container">
            <div className="row">
              <div className="col-10 col-md-8 mx-auto mt-5 text-center mt-5">
                <h1 className="text-capitalize recipe-text-gray recipe-slanted">
                  {this.state.error}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <RecipesList recipes={this.state.recipes} />
        )}
      </>
    );
  }
}
