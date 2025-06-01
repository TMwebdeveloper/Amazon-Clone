import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth.jsx";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

const stripePromise = loadStripe(
  "pk_test_51RUoAEQbqzbKIC3ZudyTkHK3MbKBuvF49BJo2d6YWXJtCcTT15EjcwWKuF0RUjmzZZprUteWDfMl3yTWK4YoBYxy00RBqIbz6v"
);

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/payments"
        element={
          <ProtectedRoute msg={"you must login to pay"} redirect={"/payments"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute 
          msg={"you must login to access your orders"}
          redirect={"/orders"}>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
