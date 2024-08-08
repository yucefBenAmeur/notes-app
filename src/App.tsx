import { Box } from "@mui/material";

import Body from "./components/Body";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          fontSize: "0.875rem",
          fontWeight: "700",

          gridTemplateAreas: '"main main"',
        }}
      >
        <Box sx={{ gridArea: "main" }}>
          <Body></Body>
        </Box>
      </Box>
    </>
  );
}

export default App;

{
  /* 
      <Box xs={6} md={8} sx={{ gridArea: "header", bgcolor: "primary.main" }}>
        Header
      </Box>
      <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>
        Main
        </Box>
  */
}

{
  /* <Grid container spacing={2}>
        <Grid item xs={5} md={20}>
          <Paper elevation={3}>
            <Box p={2}>head</Box>
          </Paper>
        </Grid>
        <Grid item xs={6} md={25}>
          <Paper elevation={3}>
            <Box p={2}>body</Box>
          </Paper>
        </Grid>
      </Grid> */
}
