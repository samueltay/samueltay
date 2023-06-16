import React from "react";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import jsonData from "./textContent.json";

function Home() {
  return (
    <div className="App">
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Grid container spacing={0} maxWidth={1400}>
        <Grid
          container
          item
          xs={12}
          md={5}
          direction="column"
          paddingLeft={"20px"}
          paddingRight={"20px"}
          paddingTop={"40px"}
        >
          <Paper
            variant="outlined"
            rounded-square
            elevation={12}
            style={{
              padding: 40,
              border: "3px solid black",
              borderRadius: "40px"
            }}
          >
            <p>image placeholder</p>
          </Paper>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={7}
          direction="column"
          textAlign={"left"}
          paddingLeft={"20px"}
          paddingRight={"20px"}
          paddingTop={"40px"}
        >
          <Paper
            variant="outlined"
            rounded-square
            elevation={12}
            style={{
              padding: 40,
              border: "3px solid black",
              borderRadius: "40px"
            }}
          >
            <h1>{jsonData.about.title}</h1>
            {jsonData.about.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
