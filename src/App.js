import React from "react";
import { Route, Routes } from "react-router-dom";
import { Billing } from "./pages/Billing/Billing";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </>
  );
};

export default App;
