import React from "react";

//Files
import Accordion from "../../../components/Accordion";

//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Main = ({ state }) => {
  return (
    <Box sx={{ py: 2, mb: 3 }}>
      <Container maxWidth="lg">
        {state.map((event) => {
          const { topic_name, topic_content } = event;
          return (
            <Box key={topic_name}>
              <Accordion
                topic_name={topic_name}
                topic_content={topic_content}
              />
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Main;
