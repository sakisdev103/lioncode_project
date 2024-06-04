import React from "react";

//Files
import Card from "../../../components/Card";

//MUI
import { Box, Container } from "@mui/material";

//Framer
import { Reorder } from "framer-motion";

const Main = ({ events, setEvents }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        {/* Wrapping the content in which we want to change the order */}
        <Reorder.Group
          values={events}
          onReorder={setEvents}
          style={{ padding: 0 }}
        >
          {events
            .filter((event) => {
              if (event.is_inclass === true) {
                return event;
              }
            })
            .map((event, index) => {
              const { topics, date } = event;
              const { id, title, event_info1 } = event.event;
              return (
                <Reorder.Item
                  value={event}
                  key={event.event.id}
                  style={{ listStyleType: "none" }}
                >
                  <Card
                    id={id}
                    title={title}
                    event_info1={event_info1}
                    date={date}
                    topics={topics}
                    index={index}
                  />
                </Reorder.Item>
              );
            })}
        </Reorder.Group>
      </Container>
    </Box>
  );
};

export default Main;
