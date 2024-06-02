import React from "react";

//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

//Icons
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const Cards = ({ title, event_info1, date }) => {
  return (
    <Card sx={{ backgroundColor: "common.white" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="secondary">
          {title}
        </Typography>
        <Typography component="div" align="right">
          <SwapVertIcon />
        </Typography>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={2}>
            <Stack direction="row" spacing={0.5}>
              <PlaceIcon />
              <Typography>{event_info1?.course_inclass_city}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={10}>
            <Stack direction="row" spacing={0.5}>
              <CalendarMonthIcon />
              <Typography>{date}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Cards;
