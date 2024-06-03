import React from "react";
import { Link as RouterLink } from "react-router-dom";

//MUI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Error = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Typography component="div" variant="h4" color="error" gutterBottom>
          404 Page Not Found
        </Typography>
        <Typography align="center">
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/"
            startIcon={<ArrowBackIcon />}
          >
            go back
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Error;
