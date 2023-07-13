import React from "react";
import { Helmet } from "react-helmet";
import "./Fun.css";

function Lift() {
  return (
    <div className="main">
      <Helmet>
        <title>Lift!</title>
      </Helmet>
      <h1>
        Your next location is underneath the lifting part of our coffee table
        where we eat most of our meals. Lift up the table top to find the clue
        taped underneath!
      </h1>
    </div>
  );
}

export default Lift;
