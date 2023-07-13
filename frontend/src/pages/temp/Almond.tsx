import React from "react";
import { Helmet } from "react-helmet";
import "./Fun.css";

function Almond() {
  return (
    <div className="main">
      <Helmet>
        <title>Almond!</title>
      </Helmet>
      <h1>
        Your next location is underneath the compostable cup filled with
        chocolate covered espresso beans from Google! It should be on our dining
        table.
      </h1>
    </div>
  );
}

export default Almond;
