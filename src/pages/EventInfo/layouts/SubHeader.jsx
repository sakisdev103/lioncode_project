import React, { useState } from "react";

//MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const SubHeader = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="tabs"
          >
            <Tab value="1" label="SCHEDULE" />
            <Tab value="2" label="TAB1" disabled />
            <Tab value="3" label="TAB2" disabled />
            <Tab value="4" label="TAB3" disabled />
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default SubHeader;
