import React from "react";

//MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
