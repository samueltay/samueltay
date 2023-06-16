import React from "react";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Grid";
import jsonData from "./textContent.json";
import GridItem from "../../components/shared/grid/GridItem";

function Home() {
  return (
    <div className="App">
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Grid container spacing={0} maxWidth={1400}>
        <GridItem md={5}>
          <p>image placeholder</p>
        </GridItem>
        <GridItem md={7}>
          <h1>{jsonData.about.title}</h1>
          {jsonData.about.body.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </GridItem>
      </Grid>
    </div>
  );
}

export default Home;
