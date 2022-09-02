import React from "react";
import { Route, Routes } from "react-router-dom";
import { Billing } from "./pages/Billing/Billing";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </>
  );
};

export default App;
