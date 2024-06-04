import React from "react";

//Files
import Search from "./Search";

//MUI
import Dialog from "@mui/material/Dialog";

const Modal = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(!open)}>
      <Search setOpen={setOpen} />
    </Dialog>
  );
};

export default Modal;
