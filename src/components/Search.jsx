import React from "react";

//MUI
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

//Icons
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ search, setSearch, handleSearch }) => {
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

export default Search;
