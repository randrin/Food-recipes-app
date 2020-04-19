import React, { Component } from "react";
import "./Search.scss";

export default class Search extends Component {
  render() {
    const { handleChange, handelSubmit, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-5 text-center">
            <h1 className="text-capitalize recipe-slanted">
              {" "}
              Search <span className="recipe-text-red">Recipes Foods</span>
            </h1>
            <form className="mt-4 text-capitalize">
              <label htmlFor="search" className="recipe-slanted">
                Digital recipes, serparated by comma
              </label>
              <div className="input-group">
                <input
                  placeholder="Oignon, salade, carotte, ..."
                  name="search"
                  type="text"
                  className="form-control"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    onClick={handelSubmit}
                    className="bg-primary input-group-text text-white"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
