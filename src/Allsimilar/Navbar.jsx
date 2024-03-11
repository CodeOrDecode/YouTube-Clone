import React from "react";
import "../Css/Navbar.css";
import { IoMdMic } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { Authcontext } from "../Context/Authcontextprovider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { getData, handleshowsearch, handleClose,serachResults } =
    React.useContext(Authcontext);
  const [textval, setTextval] = useState("");
const navigate = useNavigate();

  function gotopage() {
    getData();
  }

  function handleChange(event) {
    setTextval(event.target.value);
    handleshowsearch(event.target.value);
    if (event.target.value === "") {
      handleClose();
    }
  }

  function handletypesearch() {
    // console.log(textval);
    if (textval) {
      serachResults(textval);
    }
  }

  function handleSignIn(){
    navigate("/login");
  }


  return (
    <>
      <div className="beforeloginnavbar">
        <div className="firstnav">
          <img src="./ham.jpg" className="hamlogo" alt="" />
          <img
            className="youtubelogo"
            src="./youtubelogo.jpg"
            alt=""
            onClick={gotopage}
          />
        </div>

        <div className="secondnav">
          <input
            type="text"
            className="secondnavinput"
            placeholder="Search"
            value={textval}
            onChange={handleChange}
          />
          <div className="searchone" onClick={handletypesearch}>
            <img src="./search.jpg" className="searchnav" alt="" />
          </div>

          <div className="micicon">
            <IoMdMic className="micis" />
          </div>
        </div>

        <div className="thirdnav" onClick={handleSignIn}>
          <div className="thirdnavcon">
            <MdAccountCircle className="accounticon" />
            <p className="signinbutton">Sign in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
