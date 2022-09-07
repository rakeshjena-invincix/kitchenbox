import React from "react";
import { Route, Routes } from "react-router-dom";
import Billing from "./pages/Billing/Billing";
import HomePage from "./pages/Home/HomePage";
import Subscription from "./pages/Subscription/Subscription";
import SubscriptionPlan from "./pages/Subscription/SubscriptionPlan";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscription-plan" element={<SubscriptionPlan />} />
      </Routes>
    </>
  );
};

export default App;
