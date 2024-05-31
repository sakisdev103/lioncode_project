import React, { useEffect, useState } from "react";

//MUI
import Container from "@mui/material/Container";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

//Icons
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const Main = ({ events }) => {
  const selectedFn = (e) => {
    console.log(e.target.style);
  };
  return (
    <Container sx={{ py: 2, px: 3 }} maxWidth="false">
      <Container maxWidth="lg">
        {events
          .filter((event) => {
            if (event.is_inclass === true) {
              return event;
            }
          })
          .map((event) => {
            console.log(event);
            return (
              <CardActionArea
                sx={{ my: 3 }}
                onClick={selectedFn}
                key={event.event.id}
              >
                <Card sx={{ backgroundColor: "common.white" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="secondary"
                    >
                      {event.event.title}
                    </Typography>
                    <Typography component="div" align="right">
                      <SwapVertIcon />
                    </Typography>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item xs={12} md={2}>
                        <Stack direction="row" spacing={0.5}>
                          <PlaceIcon />
                          <Typography>
                            {event.event.event_info1?.course_inclass_city}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Stack direction="row" spacing={0.5}>
                          <CalendarMonthIcon />
                          <Typography>{event.date}</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </CardActionArea>
            );
          })}
      </Container>
    </Container>
  );
};

export default Main;
