import React, { useState } from "react";
import { useGlobalContext } from "../pages/EventInfo/EventInfo";

//Files
import Search from "./Search";

//MUI
import Dialog from "@mui/material/Dialog";

const Modal = ({ open, setOpen }) => {
  const { topics, setTopics } = useGlobalContext();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      setTopics(allTopics);
    }
    setTopics(
      topics.filter((item) => {
        if (item.topic_name.includes(search)) {
          return item;
        }
      })
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(!open)}>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
    </Dialog>
  );
};

export default Modal;
