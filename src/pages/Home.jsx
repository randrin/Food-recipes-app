import React, { Component } from "react";
import Header from "../components/Home/Home";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header title="Foods Recipes">
          <h2 className="text-center text-white">
            All about our recipes foods, Let's go ...
          </h2>
          <Link
            to="/recipes"
            className="btn btn-secondary btn-lg text-uppercase mt-3"
          >
            Search Recipes <i className="fa fa-chevron-right"></i>
          </Link>
        </Header>
      </>
    );
  }
}
