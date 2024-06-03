import React from "react";
import { Link as RouterLink } from "react-router-dom";

//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

//Icons
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const Cards = ({ id, title, event_info1, date, topics }) => {
  return (
    <Card sx={{ backgroundColor: "common.white", my: 3 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <CardActionArea
            key={id}
            component={RouterLink}
            to={`/event/${id}`}
            state={topics}
          >
            <Typography
              variant="h5"
              component="div"
              color="secondary"
              sx={{ mb: 8 }}
            >
              {title}
            </Typography>
            <Grid container alignItems="center" spacing={1}>
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
          </CardActionArea>
          <SwapVertIcon />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Cards;
