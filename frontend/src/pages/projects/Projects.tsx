import React, { useContext } from "react";
import jsonData from "./textContent.json";
import { Helmet } from "react-helmet";
import { GridContainer, PaperComponent } from "../../components/grid/GridItem";
import { ScreenSizeContext } from "../../components/screen_size/ScreenSizeContext";
import ExpandableButton from "../../components/expandable_button/ExpandableButton";

function Projects() {
  const { windowWidth } = useContext(ScreenSizeContext);

  return (
    <div className="App-main">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <GridContainer maxWidth={1000}>
        {jsonData.experience.map((item) => (
          <PaperComponent md={12}>
            <div className="vertical-components">
              <div
                className={`${
                  windowWidth < 600
                    ? "vertical-components"
                    : "horizontal-components"
                }`}
              >
                <div style={{ padding: 30, justifyContent: "center" }}>
                  <img src={item.image_path} alt={item.image_path} width={200} />
                </div>
                <div className="vertical-components">
                  <h1>{item.name}</h1>
                  <h2>{item.summary}</h2>
                </div>
              </div>
              <ExpandableButton>
                <div>
                  {/* {item.description.map((paragraph: string, index: number) => ( */}
                  {["Placeholder"].map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </ExpandableButton>
            </div>
          </PaperComponent>
        ))}
      </GridContainer>
    </div>
  );
}

export default Projects;
