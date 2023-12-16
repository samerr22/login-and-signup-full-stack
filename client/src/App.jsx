import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import necessary components

import Signup from "./Signup";
import Singin from "./Singin";
import Homee from "./Homee";
import Header from "../components/Header";
import Profile from "./Profile";
import PrivateRoute from "../components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Singin />} />
        <Route path="/" element={<Homee />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
