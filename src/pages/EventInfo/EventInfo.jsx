import React from "react";
import { useLocation } from "react-router-dom";

//Files
import Header from "./layouts/Header";
import SubHeader from "./layouts/SubHeader";
import Main from "./layouts/Main";

//MUI
import Box from "@mui/material/Box";

const EventInfo = () => {
  const { state } = useLocation();

  return (
    <Box>
      <Header />
      <SubHeader />
      <Main state={state} />
    </Box>
  );
};

export default EventInfo;
