import React from "react";
import { Helmet } from "react-helmet";
import {
  GridContainer,
  PaperComponent,
} from "../../../components/grid/GridItem";

function ProjectsList() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Personal Website Project</title>
      </Helmet>
      <GridContainer maxWidth={1000}>
        <PaperComponent md={12}>
          <div>
            <h1>Personal Website</h1>
          </div>
        </PaperComponent>
      </GridContainer>
    </div>
  );
}

export default ProjectsList;
