import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import NewSpot from "./components/NewSpot";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/new" element={<NewSpot/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
