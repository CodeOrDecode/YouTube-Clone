import React from "react";
import "../Css/Navbar.css";
import { IoMdMic } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { Authcontext } from "../Context/Authcontextprovider";
import { useNavigate } from "react-router-dom";

const Afterloginnavnbar = () => {
  const navigate = useNavigate();
  const {
    serachResults,
    getData,
    handleshowsearch,
    handleClose,
    handelSignout,
    namedata,
    handleTitle
  } = React.useContext(Authcontext);
  const [floshow, setFloshow] = useState(false);
  const [textval, setTextval] = useState("");

  function handleShow() {
    setFloshow(!floshow);
  }

  function handleShow2() {
    setFloshow(!floshow);
    handelSignout();
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
      handleTitle(textval);
    }
  }

  function gotopage() {
    getData();
    navigate("/Afterloginhome");
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

        <div className="thirdnav2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              style={{ height: "100%" }}
              width="24"
              display="block"
              pointerEvents="none"
              viewBox="0 0 24 24"
            >
              <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              display="block"
              viewBox="0 0 24 24"
              style={{ height: "100%" }}
              pointerEvents="none"
            >
              <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42l-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
            </svg>
          </div>
          {namedata && (
            <div className="nameletter" onClick={handleShow}>
              {namedata[0]}
            </div>
          )}
        </div>
      </div>

      {floshow && (
        <div className="floatingbar">
          <div className="floatoneis">
            {namedata && <div>{namedata[0]}</div>}
            {namedata && <p>{namedata}</p>}
          </div>

          <p className="chennelafterlo">View your channel</p>
          <div className="ruller2"></div>

          <div className="catagorywiseafter">
            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                display="block"
                pointerEvents="none"
              >
                <path d="M12 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77C6.48 22 2 17.52 2 12S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.97-1.49-3.85-1.49-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22H12z"></path>
              </svg>

              <p>Google Account</p>
            </div>

            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                pointerEvents="none"
              >
                <path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path>
              </svg>

              <p>Switch Account</p>
            </div>

            <div className="smalllcatafterlo" onClick={handleShow2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                pointerEvents="none"
              >
                <path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1l.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path>
              </svg>

              <p>Sign out</p>
            </div>
            <div className="ruller2"></div>

            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                pointerEvents="none"
              >
                <path d="M10 9.35L15 12l-5 2.65zM12 3a.73.73 0 00-.31.06L4.3 7.28a.79.79 0 00-.3.52v8.4a.79.79 0 00.3.52l7.39 4.22a.83.83 0 00.62 0l7.39-4.22a.79.79 0 00.3-.52V7.8a.79.79 0 00-.3-.52l-7.39-4.22A.73.73 0 0012 3m0-1a1.6 1.6 0 01.8.19l7.4 4.22A1.77 1.77 0 0121 7.8v8.4a1.77 1.77 0 01-.8 1.39l-7.4 4.22a1.78 1.78 0 01-1.6 0l-7.4-4.22A1.77 1.77 0 013 16.2V7.8a1.77 1.77 0 01.8-1.39l7.4-4.22A1.6 1.6 0 0112 2zm0 4a.42.42 0 00-.17 0l-4.7 2.8a.59.59 0 00-.13.39v5.61a.65.65 0 00.13.37l4.7 2.8A.42.42 0 0012 18a.34.34 0 00.17 0l4.7-2.81a.56.56 0 00.13-.39V9.19a.62.62 0 00-.13-.37L12.17 6A.34.34 0 0012 6m0-1a1.44 1.44 0 01.69.17L17.39 8A1.46 1.46 0 0118 9.19v5.61a1.46 1.46 0 01-.61 1.2l-4.7 2.81A1.44 1.44 0 0112 19a1.4 1.4 0 01-.68-.17L6.62 16A1.47 1.47 0 016 14.8V9.19A1.47 1.47 0 016.62 8l4.7-2.8A1.4 1.4 0 0112 5z"></path>
              </svg>

              <p>YouTube Studio</p>
            </div>

            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                pointerEvents="none"
              >
                <path d="M12 3.06l7 3.21v4.84c0 1.3-.25 2.6-.75 3.86-.15.37-.33.76-.55 1.17-.15.27-.31.54-.48.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-.56-3.91-1.97-5.23-3.98-.17-.27-.33-.54-.48-.81-.22-.41-.4-.79-.55-1.17-.48-1.26-.73-2.56-.73-3.86V6.27l7-3.21m0-1.1L4 5.63v5.49c0 1.47.3 2.9.81 4.22.17.44.37.86.6 1.28.16.3.34.6.52.88 1.42 2.17 3.52 3.82 5.95 4.44l.12.02.12-.03c2.43-.61 4.53-2.26 5.95-4.43.19-.29.36-.58.52-.88.22-.41.43-.84.6-1.28.51-1.33.81-2.76.81-4.23V5.63l-8-3.67zm1.08 10.15c-.32-.06-.64-.11-.96-.12A2.997 2.997 0 0012 6a2.996 2.996 0 00-.12 5.99c-.32.01-.64.06-.96.12C8.64 12.58 7 14.62 7 17h10c0-2.38-1.64-4.42-3.92-4.89zM10 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1.12 4.09c.37-.08.64-.11.88-.11s.51.03.88.11c1.48.3 2.63 1.46 3 2.91H8.12c.37-1.45 1.52-2.61 3-2.91z"></path>
              </svg>
              <p>Your data in YouTube</p>
            </div>
            <div className="ruller2"></div>

            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                display="block"
                pointerEvents="none"
              >
                <path d="M12 20.95q-3.025-.875-5.013-3.638Q5 14.55 5 11.1V5.7l7-2.625L19 5.7v5.65q-.225-.075-.5-.15t-.5-.125v-4.7L12 4.15 6 6.375V11.1q0 1.475.438 2.838.437 1.362 1.187 2.5.75 1.137 1.788 1.987 1.037.85 2.212 1.3l.05-.025q.125.3.3.588.175.287.4.537-.1.025-.187.063-.088.037-.188.062zM17 17q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q17.625 14 17 14t-1.062.438q-.438.437-.438 1.062t.438 1.062Q16.375 17 17 17zm0 3q.8 0 1.438-.35.637-.35 1.062-.95-.575-.35-1.2-.525Q17.675 18 17 18t-1.3.175q-.625.175-1.2.525.425.6 1.062.95Q16.2 20 17 20zm0 1q-1.675 0-2.837-1.163Q13 18.675 13 17q0-1.675 1.163-2.838Q15.325 13 17 13q1.675 0 2.837 1.162Q21 15.325 21 17t-1.163 2.837Q18.675 21 17 21zm-5-9.05z"></path>
              </svg>
              <p>Restricted Mode: Off</p>
            </div>

            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                display="block"
                pointerEvents="none"
              >
                <path d="M11.99 1.98C6.46 1.98 1.98 6.47 1.98 12s4.48 10.02 10.01 10.02c5.54 0 10.03-4.49 10.03-10.02S17.53 1.98 11.99 1.98zM8.86 14.5c-.16-.82-.25-1.65-.25-2.5 0-.87.09-1.72.26-2.55h6.27c.17.83.26 1.68.26 2.55 0 .85-.09 1.68-.25 2.5H8.86zm6.03 1c-.54 1.89-1.52 3.64-2.89 5.15-1.37-1.5-2.35-3.25-2.89-5.15h5.78zM9.12 8.45A12.86 12.86 0 0112 3.35c1.36 1.49 2.34 3.22 2.88 5.1H9.12zm7.03 1h4.5a8.933 8.933 0 01.01 5.05h-4.51c.15-.82.24-1.65.24-2.5 0-.87-.09-1.72-.24-2.55zm4.14-1h-4.38c-.53-1.97-1.47-3.81-2.83-5.4 3.25.4 5.96 2.51 7.21 5.4zm-9.37-5.4c-1.35 1.59-2.3 3.43-2.83 5.4H3.71a9.018 9.018 0 017.21-5.4zm-7.57 6.4h4.5c-.15.83-.24 1.68-.24 2.55 0 .85.09 1.68.24 2.5H3.34a8.939 8.939 0 01.01-5.05zm.34 6.05h4.39c.52 1.99 1.48 3.85 2.84 5.45a9.02 9.02 0 01-7.23-5.45zm9.4 5.45c1.36-1.6 2.32-3.46 2.84-5.45h4.39a9.07 9.07 0 01-7.23 5.45z"></path>
              </svg>
              <p>Location: India</p>
            </div>

            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                pointerEvents="none"
              >
                <path d="M12 9.5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
              </svg>
              <p>Settings</p>
            </div>

            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                pointerEvents="none"
              >
                <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49a1.634 1.634 0 00-2.05-1.58c-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
              </svg>
              <p>Help</p>
            </div>

            <div className="smalllcatafterlo" onClick={handleShow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "60%" }}
                pointerEvents="none"
              >
                <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
              </svg>
              <p>Send feedback</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Afterloginnavnbar;
