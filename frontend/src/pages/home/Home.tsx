import React from "react";
import { Helmet } from "react-helmet";
import jsonData from "./textContent.json";
import { GridContainer, PaperComponent } from "../../components/grid/GridItem";

function Home() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <GridContainer>
        <PaperComponent md={5} />
        <PaperComponent
          md={7}
          title={jsonData.about.title}
          body={jsonData.about.body}
        />
      </GridContainer>
    </div>
  );
}

export default Home;
