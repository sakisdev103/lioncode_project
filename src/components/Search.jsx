import React from "react";
import { useGlobalContext } from "../pages/EventInfo/EventInfo";
import { useGlobalSearch } from "../pages/EventInfo/layouts/Header";

//MUI
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

//Icons
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = ({ setOpen }) => {
  const { setTopics, state } = useGlobalContext();
  const { search, setSearch } = useGlobalSearch();

  //Function for searching topics
  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      setTopics(
        state.filter((item) => {
          if (item.topic_name.includes(search)) {
            return item;
          }
        })
      );
    } else {
      setTopics([]);
    }
    setOpen(false);
  };
  return (
    <Paper
      component="form"
      sx={{
        backgroundColor: "background.default",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
      onSubmit={handleSearch}
    >
      <InputBase
        id="searchbar"
        sx={{ ml: 1, flex: 1, color: "primary" }}
        placeholder="Search event"
        inputProps={{ "aria-label": "search event" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
};

export default SearchComponent;
