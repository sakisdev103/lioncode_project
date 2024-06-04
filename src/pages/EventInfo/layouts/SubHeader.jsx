import React, { useState } from "react";

//MUI
import { Box, Container, Tabs, Tab } from "@mui/material";

const SubHeader = () => {
  const [value, setValue] = useState("1");

  //Function to detect when user clicks on the other tabs. Right now we don't have content about the other tabs so i set them as disabled. If we want to display content based on selected tab we need to add some more functionallity to display the data dynamic about each page.
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
