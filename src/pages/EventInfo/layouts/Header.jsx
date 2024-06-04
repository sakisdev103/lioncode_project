import React, { useState, useContext, createContext } from "react";
import { useGlobalContext } from "../EventInfo";

//Files
import Navigation from "./Navigation";
import SubHeader from "./SubHeader";
import Filter from "../../../components/Filter";

//MUI
import Box from "@mui/material/Box";

//Setting up context api
const GlobalSearch = createContext();
export const useGlobalSearch = () => useContext(GlobalSearch);

const Header = () => {
  const { state, topics } = useGlobalContext(); //Retrieving data
  const [search, setSearch] = useState(""); //For search functionallity
  return (
    <Box>
      <GlobalSearch.Provider value={{ search, setSearch }}>
        <Navigation />
        <SubHeader />
        {topics.length > 0 && state.length !== topics.length && <Filter />}
      </GlobalSearch.Provider>
    </Box>
  );
};

export default Header;
