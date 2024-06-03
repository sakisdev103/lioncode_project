import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

//Files
import Header from "./layouts/Header";
import SubHeader from "./layouts/SubHeader";
import Main from "./layouts/Main";
import Filter from "../../components/Filter";
import Footer from "../layouts/Footer";

//MUI
import Box from "@mui/material/Box";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const EventInfo = () => {
  const isOnMainPage = false;
  const { state } = useLocation(); //Retrieving data
  const [topics, setTopics] = useState(state); //Passing the data in order to set up context api, for state managment in multiple files.
  const [search, setSearch] = useState(""); //For search functionallity

  return (
    <GlobalContext.Provider
      value={{ topics, setTopics, state, search, setSearch }} //Making these values accesible on the wrapped files.
    >
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        <Box sx={{ pb: 12 }}>
          <Header />
          <SubHeader />
          {search !== "" && <Filter />}
          <Main />
        </Box>
        <Box sx={{ height: 12 }}>
          <Footer flag={isOnMainPage} />
        </Box>
      </Box>
    </GlobalContext.Provider>
  );
};

export default EventInfo;
