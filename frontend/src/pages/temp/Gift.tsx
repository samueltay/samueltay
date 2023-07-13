import React from "react";
import { Helmet } from "react-helmet";
import "./Fun.css";

function Gift() {
  return (
    <div className="main">
      <Helmet>
        <title>Gift!</title>
      </Helmet>
      <h1>
        Your next location is under the kangaroo plushie with the bowtie on the
        TV stand!
      </h1>
    </div>
  );
}

export default Gift;
