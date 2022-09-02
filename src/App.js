import React from "react";
import { Route, Routes } from "react-router-dom";
import { Billing } from "./pages/Billing/Billing";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </>
  );
};

export default App;
