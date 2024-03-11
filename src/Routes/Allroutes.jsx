import React from "react";
import { Routes, Route } from "react-router-dom";
import Beforeloginhome from "../Components/Beforeloginhome";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Afterloginhome from "../Components/Afterloginhome";
import Searchvideo from "../Components/Searchvideo";
import Singlevideo from "../Components/Singlevideo";
import Privateroute from "../Private/Privateroute";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Beforeloginhome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/afterloginhome"
          element={
            <Privateroute>
              <Afterloginhome />
            </Privateroute>
          }
        />
        <Route
          path="/searchvideo"
          element={
            <Privateroute>
              <Searchvideo />
            </Privateroute>
          }
        />
        <Route
          path="/singlevideo"
          element={
            <Privateroute>
              <Singlevideo />
            </Privateroute>
          }
        />
      </Routes>
    </>
  );
};

export default Allroutes;
