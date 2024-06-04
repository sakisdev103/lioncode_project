import React from "react";
import { useGlobalContext } from "../pages/EventInfo/EventInfo";
import { useGlobalSearch } from "../pages/EventInfo/layouts/Header";

//MUI
import { Box, Container, Button } from "@mui/material";

const Filter = () => {
  const { state, setTopics } = useGlobalContext();
  const { setSearch } = useGlobalSearch();
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
