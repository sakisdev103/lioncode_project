import React from "react";

//MUI
import { CircularProgress, Grid } from "@mui/material";

const Loading = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <CircularProgress size="4rem" color="secondary" />
        </Grid>
      </Grid>
    </>
  );
};

export default Loading;
