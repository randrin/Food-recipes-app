import React, { Component } from "react";
import Header from "../components/Home/Home";
import { Link } from "react-router-dom";

export default class Error404 extends Component {
  render() {
    return (
      <div>
        <Header title="404 Error" styleClass="recipe-header-default">
          <h2 className="text-center text-white">
            Oufff! The page that you try to find isn't available. Try again ...
          </h2>
          <Link to="/" className="btn btn-primary btn-lg text-uppercase mt-3">
            Go to Home
          </Link>
        </Header>
      </div>
    );
  }
}
