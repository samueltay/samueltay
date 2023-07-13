import React from "react";
import { Helmet } from "react-helmet";
import "./Fun.css";

function Charity() {
  return (
    <div className="main">
      <Helmet>
        <title>Charity!</title>
      </Helmet>
      <h1>
        Your next location is under our bar counter near where the pasta maker
        is! Remember when we made pasta to watch Charity's season of the
        Bachelorette? Fun!
      </h1>
    </div>
  );
}

export default Charity;
