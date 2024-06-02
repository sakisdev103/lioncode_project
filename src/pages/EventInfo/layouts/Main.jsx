import React from "react";
import { useGlobalContext } from "../EventInfo";
//Files
import Accordion from "../../../components/Accordion";

//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Main = () => {
  const { topics } = useGlobalContext();
  return (
    <Box sx={{ py: 2, mb: 3 }}>
      <Container maxWidth="lg">
        {topics.map((event) => {
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
