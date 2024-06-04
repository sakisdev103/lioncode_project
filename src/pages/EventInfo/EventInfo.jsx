import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

//Files
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "../layouts/Footer";

//MUI
import Box from "@mui/material/Box";

//Setting up context api
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const EventInfo = () => {
  const isOnMainPage = false;
  const { state } = useLocation(); //Retrieving data
  const [topics, setTopics] = useState(state); //Passing the data

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Box sx={{ pb: 12 }}>
        <GlobalContext.Provider
          value={{ topics, setTopics, state }} //Making these values accesible on the wrapped files.
        >
          <Header />
          <Main />
        </GlobalContext.Provider>
      </Box>
      <Box sx={{ height: 12 }}>
        <Footer flag={isOnMainPage} />
      </Box>
    </Box>
  );
};

export default EventInfo;
