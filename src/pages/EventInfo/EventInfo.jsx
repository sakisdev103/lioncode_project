import React from "react";
import { useLocation } from "react-router-dom";

//Files
import Header from "./layouts/Header";
import SubHeader from "./layouts/SubHeader";
import Main from "./layouts/Main";

//MUI
import Box from "@mui/material/Box";
import Footer from "../layouts/Footer";

const EventInfo = () => {
  const isOnMainPage = false;
  const { state } = useLocation();
  console.log(state);
  return (
    <Box>
      <Header />
      <SubHeader />
      <Main state={state} />
      <Footer flag={isOnMainPage} />
    </Box>
  );
};

export default EventInfo;
