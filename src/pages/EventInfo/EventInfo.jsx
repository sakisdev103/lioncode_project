import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

//Files
import Header from "./layouts/Header";
import SubHeader from "./layouts/SubHeader";
import Main from "./layouts/Main";

//MUI
import Box from "@mui/material/Box";
import Footer from "../layouts/Footer";
import Filter from "../../components/Filter";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const EventInfo = () => {
  const isOnMainPage = false;
  const { state } = useLocation();
  const [topics, setTopics] = useState(state);
  // console.log(state);
  const [search, setSearch] = useState("");

  return (
    <GlobalContext.Provider
      value={{ topics, setTopics, state, search, setSearch }}
    >
      <Box>
        <Header />
        <SubHeader />
        {search !== "" && <Filter />}
        <Main />
        <Footer flag={isOnMainPage} />
      </Box>
    </GlobalContext.Provider>
  );
};

export default EventInfo;
