import React from "react";

//MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

//Icons
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";

const Footer = ({ flag }) => {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          borderTop: `2px solid #838992; width:50%; ${
            !flag && "position: absolute; right:0"
          } `,
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ py: 5 }}
      >
        <SchoolIcon />
        <PersonIcon />
      </Stack>
    </Box>
  );
};

export default Footer;
