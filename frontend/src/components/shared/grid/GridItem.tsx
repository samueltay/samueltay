import React from "react";
import { Grid, Paper } from "@mui/material";

interface GridItemProps {
  children: React.ReactNode;
  md?: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

interface GridContainerProps {
  children: React.ReactNode;
  padding?: string;
  maxWidth?: number;
}

interface PaperProps {
  title?: string;
  subtitle?: string;
  body?: Array<string>;
  md?: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

function GridContainer({
  children,
  padding = "40px",
  maxWidth = 1400,
}: GridContainerProps) {
  return (
    <Grid
      container
      sx={{ padding: { padding } }}
      spacing={2}
      maxWidth={maxWidth}
    >
      {children}
    </Grid>
  );
}

function GridItem({ children, md = "auto" }: GridItemProps) {
  return (
    <Grid
      container
      item
      xs={12}
      md={md}
      direction="column"
      gap={2}
      justifyContent="flex-start"
    >
      {children}
    </Grid>
  );
}

function PaperComponent({
  title = "",
  subtitle = "",
  body = [],
  md = "auto",
}: PaperProps) {
  return (
    <GridItem md={md}>
      <Paper
        variant="outlined"
        sx={{
          padding: "40px",
          borderRadius: "30px",
          textAlign: "left",
        }}
      >
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {body.map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Paper>
    </GridItem>
  );
}

export { GridContainer, PaperComponent };
