import React from "react";
import { Helmet } from "react-helmet";
import jsonData from "./textContent.json";
import { GridContainer, PaperComponent } from "../../components/grid/GridItem";

function Experience() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <GridContainer maxWidth={1000}>
        {jsonData.experience.map((item) => (
          <PaperComponent md={12}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div style={{ padding: 40 }}>
                <img src={item.image_path} width={200} />
              </div>
              <div>
                <h1>{item.name}</h1>
                <h2>{item.title}</h2>
                {/* {item.description.map((paragraph: string, index: number) => ( */}
                {["Placeholder"].map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </PaperComponent>
        ))}
      </GridContainer>
    </div>
  );
}

export default Experience;
