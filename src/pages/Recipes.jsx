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
    };
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <RecipeSearch
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipesList recipes={this.state.recipes} />
      </>
    );
  }
}
