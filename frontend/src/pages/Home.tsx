import React from "react";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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
            }}
          >
            <h1>About Me</h1>
            <p>
              I am currently a Robotics Software Engineer at Dexterity, a Series
              B startup working warehouse automation using intelligent robotics.
              I graduated from UC Berkeley with my MS degree in Mechanical
              Engineering. As an undergrad, I double majored in Mechanical
              Engineering and Electrical Engineering and Computer Science
              (EECS), also at UC Berkeley. I am particularly interested in
              optimal control and artificial intelligence for applications in
              autonomous vehicles and robotics.
            </p>
            <p>
              I have a strong background in control theory, optimization, and
              computer science. I also have experience in machine learning,
              robotics, and mechanical design.
            </p>
            <p>
              Through internships, academic research, and extracurricular
              activities, I participated in projects ranging from developing
              novel algorithms for energy efficient autonomous vehicles using
              Learning Model Predictive Control (LMPC) to designing and building
              a competitive formula-style racecar. These opportunities have
              provided me with both exposure and experience, and I hope to
              continue strengthening my expertise and building new skills.
            </p>
            <p>
              Details about my individual projects and experiences can be found
              below.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
