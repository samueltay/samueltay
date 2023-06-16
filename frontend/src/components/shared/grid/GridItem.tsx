import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

interface GridItemProps {
  children: React.ReactNode;
  md?: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

function GridItem({ children, md }: GridItemProps) {
  return (
    <Grid
      container
      item
      xs={12}
      md={md}
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
          borderRadius: "40px",
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
}
export default GridItem;
