import React from "react";
import { Helmet } from "react-helmet";
import "./Fun.css";

function Ikea() {
  return (
    <div className="main">
      <Helmet>
        <title>Ikea!</title>
      </Helmet>
      <h1>
        Your next location is in the wardrobe inside our room! Open the door
        with the mirror on it to find a surprise inside!
      </h1>
    </div>
  );
}

export default Ikea;
