import React, { Component } from "react";
import logo from "../../../src/assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Recipe Food" />
        </Link>
        <div className="navbar-collapse collapse show ml-sm-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <h5 className="recipe-link">Home</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">
                <h5 className="recipe-link">All Recipes</h5>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
