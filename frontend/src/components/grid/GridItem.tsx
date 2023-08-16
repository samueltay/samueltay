import React from "react";
import { Grid, Paper } from "@mui/material";

interface GridItemProps {
  children: React.ReactNode;
  md?: "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

interface GridContainerProps {
  children: React.ReactNode;
  padding?: string;
  maxWidth?: number | string | "auto";
  maxHeight?: number | "auto";
}

interface PaperProps {
  children: React.ReactNode;
  md?: "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

function GridContainer({
  children,
  padding = "40px",
  maxWidth = "100%",
  maxHeight = "auto",
}: GridContainerProps) {
  return (
    <Grid
      container
      sx={{ padding: { padding } }}
      spacing={2}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
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

function PaperComponent({ children, md = "auto" }: PaperProps) {
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
        {children}
      </Paper>
    </GridItem>
  );
}

export { GridContainer, PaperComponent };
