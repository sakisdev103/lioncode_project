import React from "react";
import { Link as RouterLink } from "react-router-dom";

//Files
import Card from "../../../components/Card";

//MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardActionArea from "@mui/material/CardActionArea";

const Main = ({ events }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        {events
          .filter((event) => {
            if (event.is_inclass === true) {
              return event;
            }
          })
          .map((event) => {
            console.log(event);
            const { topics, date } = event;
            const { id, title, event_info1 } = event.event;
            return (
              <CardActionArea
                sx={{ my: 3 }}
                key={event.event.id}
                component={RouterLink}
                to={`/event/${id}`}
                state={topics}
              >
                <Card title={title} event_info1={event_info1} date={date} />
              </CardActionArea>
            );
          })}
      </Container>
    </Box>
  );
};

export default Main;
