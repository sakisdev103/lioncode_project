import React, { useState } from "react";

//MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const SubHeader = () => {
  const [value, setValue] = useState("one");

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
            <Tab value="one" label="SCHEDULE" />
            <Tab value="two" label="TAB1" />
            <Tab value="three" label="TAB2" />
            <Tab value="four" label="TAB3" />
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default SubHeader;
