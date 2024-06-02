import React from "react";

//Files
import Accordion from "../../../components/Accordion";

//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Main = ({ state }) => {
  return (
    <Container sx={{ my: 3 }} maxWidth="lg">
      {state.map((event) => {
        const { topic_name, topic_content } = event;
        return (
          <Box key={topic_name}>
            <Accordion topic_name={topic_name} topic_content={topic_content} />
          </Box>
        );
      })}
    </Container>
  );
};

export default Main;
