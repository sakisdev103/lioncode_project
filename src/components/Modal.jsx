import React, { useState } from "react";
import { useGlobalContext } from "../pages/EventInfo/EventInfo";

//Files
import Search from "./Search";

//MUI
import Dialog from "@mui/material/Dialog";

const Modal = ({ open, setOpen }) => {
  const { topics, setTopics, state, search } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      setTopics(
        topics.filter((item) => {
          if (item.topic_name.includes(search)) {
            return item;
          }
        })
      );
    }
    if (search === "") {
      setTopics(state);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(!open)}>
      <Search handleSearch={handleSearch} />
    </Dialog>
  );
};

export default Modal;
