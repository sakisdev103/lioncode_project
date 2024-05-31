import React from "react";
import Container from "@mui/material/Container";
import logo from "../assets/lioncode-logo-custom.png";

const Navbar = () => {
  return (
    <Container
      sx={{ backgroundColor: "background.paper", py: 2, px: 3 }}
      maxWidth="false"
    >
      <Container maxWidth="lg">
        <img src={logo} alt="icon" />
      </Container>
    </Container>
  );
};

export default Navbar;
