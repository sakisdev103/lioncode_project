import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Files
import Events from "./pages/Events/Events";
import EventInfo from "./pages/EventInfo/EventInfo";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/event/:id" element={<EventInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
