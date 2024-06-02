import React from "react";

//MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper", py: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton aria-label="back" size="large" color="primary" href="/">
            <ChevronLeftIcon />
          </IconButton>
          <IconButton aria-label="search" size="large" color="primary">
            <SearchIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
