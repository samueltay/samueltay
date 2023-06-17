import React from "react";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Grid";
import jsonData from "./textContent.json";
import GridItem from "../../components/shared/grid/GridItem";

function Experience() {
  return (
    <div className="App-main">
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <Grid container spacing={0} maxWidth={1400}>
        {jsonData.experience.map((item, index) => (
          <GridItem md={12}>
            <h1>{item.name}</h1>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

export default Experience;
