import React, { Component } from "react";
import "./Recipes.scss";
import { Link } from 'react-router-dom';

export default class Recipe extends Component {
  render() {
    const {
      publisher,
      image_url,
      source_url,
      title,
      recipe_id,
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image_url} alt={title} />
          <div className="card-body">
            <h5 className="card-title recipe-text-red recipe-slanted">
              {publisher}
            </h5>
            <p className="card-text recipe-text-gray">{title}</p>
            <div className="row">
              <div className="col-md-6">
                <a
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa fa-chevron-circle-right"></i> Visit Site
                </a>
              </div>
              <div className="col-md-6">
                <Link
                  to={`/recipe/${recipe_id}`}
                  className="btn btn-success text-right"
                >
                  <i className="fa fa-eye"></i> Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
