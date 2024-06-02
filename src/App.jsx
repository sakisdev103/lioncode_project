import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Events from "./pages/Events/Events";
import EventInfo from "./pages/EventInfo/EventInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/event/:id" element={<EventInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
