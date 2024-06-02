import React, { useState } from "react";

//MUI
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

//Icons
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        sx={{ backgroundColor: "common.white", py: 5 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<SchoolIcon />} />
        <BottomNavigationAction icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;
