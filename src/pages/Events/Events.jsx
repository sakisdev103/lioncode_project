import React, { useEffect, useState } from "react";

//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//Files
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "../layouts/Footer";
import Loading from "../../components/Loading";

//axios
import axios from "axios";

const Events = () => {
  const isOnMainPage = true;
  const [events, setEvents] = useState([]); //Setting up events as an empy array

  //Fetching api using axios
  const fetchApi = async (url, params = {}) => {
    try {
      const response = await axios.get(`${url}?${params}`);
      setEvents(response.data.data); //Setting up data
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
        <Header />
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
