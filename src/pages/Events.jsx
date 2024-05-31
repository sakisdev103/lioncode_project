import React, { useEffect, useState } from "react";

//MUI
import Container from "@mui/material/Container";

//Files
import Navbar from "../layouts/Navbar";
import Main from "../layouts/Main";
import Footer from "../layouts/Footer";

//axios
import axios from "axios";
import Loading from "../components/Loading";

const Events = () => {
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
    <Container disableGutters maxWidth="false">
      <Navbar />
      {events.length < 1 ? <Loading /> : <Main events={events} />}
      {/* <Footer /> */}
    </Container>
  );
};

export default Events;
