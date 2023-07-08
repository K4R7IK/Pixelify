import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./container/Home.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
