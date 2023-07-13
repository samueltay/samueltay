import React from "react";
import { Helmet } from "react-helmet";
import "./Fun.css";

function Coffee() {
  return (
    <div className="main">
      <Helmet>
        <title>Coffee!</title>
      </Helmet>
      <h1>
        Your next location is underneath the ACTUAL coffee table. You know, the
        one where we actually make our coffee in the morning.
      </h1>
    </div>
  );
}

export default Coffee;
