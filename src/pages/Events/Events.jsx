import React, { useEffect, useState } from "react";

//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//Files
import Navbar from "./layouts/Navbar";
import Main from "./layouts/Main";
import Footer from "../layouts/Footer";
import Loading from "../../components/Loading";

//axios
import axios from "axios";

const Events = () => {
  const isOnMainPage = true;
  const [events, setEvents] = useState([]);

  const fetchApi = async (url, params = {}) => {
    try {
      const response = await axios.get(`${url}?${params}`);
      //   console.log(response.data.data);
      setEvents(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi("http://testlc.lncdoo.com/api/myprofile/events");
  }, []);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Box sx={{ pb: 12 }}>
        <Navbar />
        {events.length < 1 ? (
          <Loading />
        ) : (
          <Main events={events} setEvents={setEvents} />
        )}
      </Box>
      <Box sx={{ height: 12 }}>
        <Footer flag={isOnMainPage} />
      </Box>
    </Box>
  );
};

export default Events;
