import React from "react";

//MUI
import { Box, Container } from "@mui/material";

//Logo
import logo from "../../../assets/lioncode-logo-custom.png";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper", py: 2 }}>
      <Container maxWidth="lg">
        <img src={logo} alt="icon" />
      </Container>
    </Box>
  );
};

export default Header;
