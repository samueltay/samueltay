import React from "react";
import { Helmet } from "react-helmet";
import "./Fun.css";

function Kangaroo() {
  return (
    <div className="main">
      <Helmet>
        <title>Kangaroo!</title>
      </Helmet>
      <h1>
        Your next location is in the pocket of Mik's apron hanging on the wall
        by grocery list!
      </h1>
    </div>
  );
}

export default Kangaroo;
