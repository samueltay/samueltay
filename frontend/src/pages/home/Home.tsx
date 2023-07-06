import React from "react";
import { Helmet } from "react-helmet";
import jsonData from "./textContent.json";
import { GridContainer, PaperComponent } from "../../components/grid/GridItem";

function Home() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Samuel Tay Homepage</title>
      </Helmet>
      <GridContainer>
        <PaperComponent md={5}> </PaperComponent>
        <PaperComponent md={7}>
          <div>
            <h1>{jsonData.about.title}</h1>
            {jsonData.about.body.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </PaperComponent>
      </GridContainer>
    </div>
  );
}

export default Home;
