import React from "react";
import { useGlobalContext } from "../pages/EventInfo/EventInfo";

//MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Filter = () => {
  const { state, setTopics, setSearch } = useGlobalContext();
  const handleClick = () => {
    setTopics(state);
    setSearch("");
  };
  return (
    <Box sx={{ my: 1 }}>
      <Container maxWidth="lg">
        <Button variant="contained" color="error" onClick={handleClick}>
          CLEAR FILTER
        </Button>
      </Container>
    </Box>
  );
};

export default Filter;
