import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import homeJsonData from "./homeContent.json";
import timelineJsonData from "./timelineContent.json";
import Timeline from "../../components/timeline/Timeline";
import { ScreenSizeContext } from "../../components/screen_size/ScreenSizeContext";
import { GridContainer, PaperComponent } from "../../components/grid/GridItem";
import TagManager from "react-gtm-module";

function Home() {
  const { windowWidth } = useContext(ScreenSizeContext);
  const tagManagerArgs = {
    gtmId: "G-8L84XW685F",
  };
  TagManager.initialize(tagManagerArgs);

  return (
    <div className="App-main">
      <Helmet>
        <title>Samuel Tay Homepage</title>
      </Helmet>
      <div>
        <div>
          <GridContainer>
            <PaperComponent md={5}> </PaperComponent>
            <PaperComponent md={7}>
              <div>
                <h1>{homeJsonData.about.title}</h1>
                {homeJsonData.about.body.map(
                  (paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  )
                )}
              </div>
            </PaperComponent>
          </GridContainer>
        </div>
        {windowWidth > 800 && (
          <div>
            <Timeline
              events={timelineJsonData.timeline.map((item, index: number) => ({
                id: index.toString(),
                date: item.date,
                description: item.description,
                image: item.image_path,
              }))}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
