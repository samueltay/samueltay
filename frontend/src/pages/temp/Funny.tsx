import React from "react";
import { Helmet } from "react-helmet";
import "./Fun.css";

function Funny() {
  return (
    <div className="main">
      <Helmet>
        <title>Funny!</title>
      </Helmet>
      <h1>
        Your next location is underneath the dried flowers from our wedding
        ceremony! It should be located on the dining table.
      </h1>
    </div>
  );
}

export default Funny;
