import React from "react";
import { Helmet } from "react-helmet";
import jsonData from "./textContent.json";
import {
  GridContainer,
  PaperComponent,
} from "../../components/shared/grid/GridItem";

function Experience() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <GridContainer>
        {jsonData.experience.map((item, index) => (
          <PaperComponent
            md={12}
            title={item.name}
            subtitle={item.title}
            body={item.description}
          />
        ))}
      </GridContainer>
    </div>
  );
}

export default Experience;
