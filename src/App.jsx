import Allroutes from "./Routes/Allroutes";
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { Authcontext } from "./Context/Authcontextprovider"; 

function App() {

  const { progress } = React.useContext(Authcontext)
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
      />
      <Allroutes />
    </>
  );
}

export default App;
