import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../../assets/lioncode-logo-custom.png";

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper", py: 2, px: 3 }}>
      <Container maxWidth="lg">
        <img src={logo} alt="icon" />
      </Container>
    </Box>
  );
};

export default Navbar;
