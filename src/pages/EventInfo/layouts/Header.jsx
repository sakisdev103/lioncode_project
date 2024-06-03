import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

//Files
import Modal from "../../../components/Modal";

//MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!false);
  };
  return (
    <Box sx={{ backgroundColor: "background.paper", py: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton
            aria-label="back"
            size="large"
            color="primary"
            component={RouterLink}
            to="/"
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            aria-label="search"
            size="large"
            color="primary"
            onClick={toggleModal}
          >
            <SearchIcon />
          </IconButton>
        </Stack>
      </Container>
      {open && <Modal open={open} setOpen={setOpen} />}
    </Box>
  );
};

export default Header;
