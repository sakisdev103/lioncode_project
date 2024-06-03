import React from "react";
import { useGlobalContext } from "../EventInfo";

//Files
import Accordion from "../../../components/Accordion";

//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Main = () => {
  const { topics } = useGlobalContext(); //Retrieving data
  return (
    <Box sx={{ py: 2, mb: 3 }}>
      <Container maxWidth="lg">
        {topics.length > 0 ? (
          topics.map((event) => {
            const { topic_name, topic_content } = event;
            return (
              <Box key={topic_name}>
                <Accordion
                  topic_name={topic_name}
                  topic_content={topic_content}
                />
              </Box>
            );
          })
        ) : (
          <Typography component="div" variant="h5" align="center">
            Didn't find any event.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Main;
