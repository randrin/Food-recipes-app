import React from "react";
import "./Home.scss";

export default function Home({ children, title, syleClass }) {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${syleClass}`}>
          <div className="col text-center">
            <h1 className="text-capitalize text-center display-1 recipe-slanted recipe-letter recipe-text-white">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

Home.defaultProps = {
  title: "Default Title",
  syleClass: "recipe-header",
};
