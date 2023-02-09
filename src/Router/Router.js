import React from "react";
import { Routes, Route } from "react-router-dom";
import Confirmation from "../screens/Confirmation";
import Home from "../screens/Home";
import Reservation from "../screens/Reservation";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation">
          <Route index={true} element={<Reservation />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
