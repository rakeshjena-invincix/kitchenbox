import React from "react";
import { Route, Routes } from "react-router-dom";
import Billing from "./pages/Billing/Billing";
import Cart from "./pages/Cart/Cart";
import CateringOrder from "./pages/CateringOrder/CateringOrder";
import HomePage from "./pages/Home/HomePage";
import PreOrder from "./pages/PreOrder/PreOrder";
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
        <Route path="/pre-order" element={<PreOrder />} />
        <Route path="/catering-orders" element={<CateringOrder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
