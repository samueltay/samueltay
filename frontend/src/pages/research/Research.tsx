import React from "react";
import { Helmet } from "react-helmet";
import { GridContainer } from "../../components/grid/GridItem";
import PDFSelector from "../../components/pdf/PDFSelector";

function Research() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Research</title>
      </Helmet>
      <GridContainer>
        <PDFSelector
          files={[
            {
              name: "Eco-driving with Learning Model Predictive Control",
              file: "./papers/avec_lmpc.pdf",
            },
            {
              name: "Hardware-In-the-Loop for Connected Automated Vehicles Testing in Real Traffic",
              file: "./papers/avec_hil.pdf",
            },
            {
              name: "Shared Perception for Connected and Automated Vehicles",
              file: "./papers/iv2020_shared_perception.pdf",
            },
          ]}
        />
      </GridContainer>
    </div>
  );
}

export default Research;
