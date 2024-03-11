import React from "react";
import { Authcontext } from "../Context/Authcontextprovider";
import { Navigate } from "react-router-dom";

const Privateroute = (props) => {
  const { auth } = React.useContext(Authcontext);

  if (!auth) {
    return <Navigate to="/login" />;
  }
  return props.children;
};

export default Privateroute;
