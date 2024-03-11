import React from "react";
import Afterloginnavnbar from "../Allsimilar/Afterloginnavnbar";
import { MdAccountCircle } from "react-icons/md";
import "../Css/Afterloginhome.css";
import { useEffect } from "react";
import { Authcontext } from "../Context/Authcontextprovider";
import Loading from "../Allsimilar/Loading";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Afterloginhome = () => {
  const {
    getData,
    firstdata,
    clickData,
    loadit,
    clickandgetData,
    show,
    searchtitle,
    clicktosearchandget,
    handleClose,
    handleTitle
  } = React.useContext(Authcontext);
  const navigate = useNavigate();

  function handleclickData(event) {
    clickData(event.target.innerText);
  }

  useEffect(() => {
    getData();
    handleClose();
    document.title = "YouTube"
  }, []);

  function datagoesfromhere(val) {
    clickandgetData(val);
    handleTitle(val.snippet.title)
    navigate("/Singlevideo");
  }

  function handlesearchitem(index) {
    console.log(searchtitle[index].snippet.title);
    clicktosearchandget(searchtitle[index].snippet.title);
    handleTitle(searchtitle[index].snippet.title);

  }




  if (loadit) {
    return <Loading />;
  }

  return (
    <>
      <Afterloginnavnbar />

      <div className="mainconbelog">
        <div className="protectorfirstlog">
          <div className="firstbeforelog">
            <div className="icondiv1" onClick={getData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M12 4.44l7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32l-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path>
              </svg>

              <p>Home</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
              </svg>

              <p onClick={handleclickData}>Shorts</p>
            </div>

            <div className="icondiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
              </svg>

              <p>Subscriptions</p>
            </div>

            <div className="ruller"></div>

            <div className="icondiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M11 7l6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
              </svg>

              <p>You</p>
            </div>

            <div className="icondiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                style={{ height: "100%" }}
                width="24"
                display="block"
                pointerEvents="none"
                viewBox="0 0 24 24"
              >
                <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
              </svg>

              <p>History</p>
            </div>

            <div className="ruller"></div>

            <p className="unnecessary2">Explore</p>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09a7.37 7.37 0 012.27-2.97c.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32a8.405 8.405 0 00-2.58 3.37c-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89L14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
              </svg>

              <p onClick={handleclickData}>Trending</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2a5 5 0 00-9.8 0H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path>
              </svg>

              <p onClick={handleclickData}>Shopping</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
              </svg>

              <p onClick={handleclickData}>Music</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M22.01 4.91l-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
              </svg>

              <p onClick={handleclickData}>Movies</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7l-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71a9.968 9.968 0 000 14.16l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71l-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
              </svg>

              <p onClick={handleclickData}>Live</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35l-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15l4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
              </svg>

              <p onClick={handleclickData}>Gaming</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
              </svg>

              <p onClick={handleclickData}>News</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01a5.998 5.998 0 005.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62l-2 1V6h2v4.38z"></path>
              </svg>

              <p onClick={handleclickData}>Sports</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M16 21h-2.28a1.98 1.98 0 01-3.44 0H8v-1h8v1zm4-11a7.98 7.98 0 01-4 6.92V19H8v-2.08A7.98 7.98 0 014 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29A7.017 7.017 0 0019 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"></path>
              </svg>

              <p onClick={handleclickData}>Learning</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                style={{ height: "100%" }}
                width="24"
                display="block"
                pointerEvents="none"
                viewBox="0 0 24 24"
              >
                <path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12L12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path>
              </svg>

              <p onClick={handleclickData}>Fashion &amp; Beauty</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71A5.985 5.985 0 016 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08l.71-.71A8.945 8.945 0 013 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71A9.942 9.942 0 0022 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z"></path>
              </svg>

              <p onClick={handleclickData}>Podcasts</p>
            </div>

            <div className="ruller"></div>

            <div className="icondiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
              </svg>

              <p>Browse channels</p>
            </div>

            <div className="ruller"></div>

            <p className="unnecessary2">More from YouTube</p>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                display="block"
                pointerEvents="none"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M1 1h21.77v22H1z"></path>
                  <g fillRule="nonzero">
                    <path
                      fill="red"
                      d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                    ></path>
                    <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                    <path
                      fill="#000"
                      fillOpacity="0.12"
                      d="M9.68 8.88l5.13 3.48.73-.38"
                    ></path>
                    <path
                      fill="#FFF"
                      fillOpacity="0.2"
                      d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                    ></path>
                    <path
                      fill="#3E2723"
                      fillOpacity="0.2"
                      d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                    ></path>
                    <path
                      fill="#FFF"
                      fillOpacity="0.2"
                      d="M9.68 15.08v.1l5.84-3.08v-.12"
                    ></path>
                    <path
                      fill="#3E2723"
                      fillOpacity="0.2"
                      d="M9.68 8.9v-.13l5.84 3.1v.1"
                    ></path>
                    <path
                      fill="url(#youtube_round__a)"
                      fillOpacity="0.1"
                      d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                      transform="translate(1 4.208)"
                    ></path>
                  </g>
                </g>
              </svg>

              <p onClick={handleclickData}>YouTube Premium</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                display="block"
                pointerEvents="none"
              >
                <circle cx="12" cy="12" r="10" fill="red"></circle>
                <path fill="#FFF" d="M10 14.65L10 9.35 15 12z"></path>
                <path
                  fill="#FFF"
                  d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-1c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
                ></path>
              </svg>

              <p onClick={handleclickData}>YouTube Music</p>
            </div>

            <div className="icondiv1" onClick={handleclickData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                display="block"
                pointerEvents="none"
              >
                <path
                  fill="red"
                  d="M21.39 13.19v-.22c-.01-.86-.5-5-.78-5.74-.32-.85-.76-1.5-1.31-1.91-.9-.67-1.66-.82-2.6-.84h-.02c-.4 0-3.01.32-5.2.62-2.2.3-4.95.7-5.6.94-.9.33-1.62.77-2.19 1.33-1.05 1.04-1.18 2.11-1.04 3.51.1 1.09.69 5.37 1.02 6.35.45 1.32 1.33 2.12 2.47 2.24.28.03.55.05.82.05 1 0 1.8-.21 2.72-.46 1.45-.39 3.25-.87 6.97-.87h.11c.91 0 3.14-.2 4.16-2.07.52-1 .49-2.21.47-2.93z"
                ></path>
                <path d="M21.99 13.26c0-.08 0-.16-.01-.24-.01-.92-.54-5.32-.83-6.11-.34-.91-.81-1.59-1.4-2.03-.94-.71-1.76-.86-2.75-.88h-.02c-.43 0-3.21.34-5.54.66s-5.25.75-5.95 1c-.96.35-1.73.82-2.33 1.42-1.12 1.1-1.25 2.25-1.11 3.74.11 1.16.73 5.71 1.08 6.75.48 1.41 1.41 2.25 2.63 2.38.3.03.58.05.87.05 1.07 0 1.91-.23 2.89-.49 1.54-.41 3.46-.93 7.41-.93H17.05c.97 0 3.34-.21 4.42-2.2.57-1.06.54-2.35.52-3.12zm-1.4 2.65c-.82 1.51-2.75 1.68-3.56 1.68h-.1c-4.09 0-6.07.53-7.67.96-.95.25-1.7.45-2.63.45-.25 0-.5-.01-.76-.04-1.04-.11-1.54-.99-1.79-1.71-.3-.88-.91-5.21-1.04-6.53-.14-1.47.06-2.18.82-2.93.5-.5 1.15-.89 1.97-1.19.17-.06 1.1-.32 5.74-.95 2.63-.36 5.07-.64 5.42-.65.83.02 1.43.13 2.17.69.43.32.79.86 1.06 1.58.22.58.76 4.78.77 5.77l.01.25c.01.67.04 1.79-.41 2.62z"></path>
                <path d="M11.59 14.76c-.48.36-.8.45-1.01.45a.54.54 0 01-.3-.08c-.34-.18-.42-.61-.5-1.2l-.01-.1c-.04-.31-.26-2.1-.38-3.16l-.09-.73c-.04-.28-.1-.75.24-1 .32-.23.75-.09.96-.03.53.17 3.6 1.23 4.59 1.73.21.09.67.28.68.83.01.5-.38.74-.53.82l-3.65 2.47z"></path>
                <path
                  fill="#FFF"
                  d="M10.3 9.89s.5 4.08.51 4.19l3.79-2.58c-.89-.43-3.53-1.36-4.3-1.61z"
                ></path>
              </svg>

              <p onClick={handleclickData}>YouTube Kids</p>
            </div>

            <div className="ruller"></div>

            <div className="icondiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M12 9.5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
              </svg>

              <p>Settings</p>
            </div>

            <div className="icondiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M13.18 4l.24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
              </svg>

              <p>Report history</p>
            </div>

            <div className="icondiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49a1.634 1.634 0 00-2.05-1.58c-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
              </svg>

              <p>Help</p>
            </div>

            <div className="icondiv1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                display="block"
                viewBox="0 0 24 24"
                style={{ height: "100%" }}
                pointerEvents="none"
              >
                <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
              </svg>

              <p>Send feedback</p>
            </div>

            <div className="formacon">
              <p>About Press Copyright</p>
              <p>Contact us Creators</p>
              <p>Advertise Developers</p>
              <p>Terms Privacy Policy & Safety</p>
              <p>How YouTube works</p>
              <p>Test new features</p>
              <p>© 2024 Google LLC</p>
            </div>
          </div>
        </div>

        <div className="secondbeforelog">
          <div className="fixedmake">
            <div className="topics">
              <div onClick={handleclickData}>All</div>
              <div onClick={handleclickData}>Music</div>
              <div onClick={handleclickData}>Fandango Movieclips</div>
              <div onClick={handleclickData}>Gaming</div>
              <div onClick={handleclickData}>Trailers</div>
              <div onClick={handleclickData}>Animated films</div>
              <div onClick={handleclickData}>Superhero movies</div>
              <div onClick={handleclickData}>Recently uploaded</div>
              <div onClick={handleclickData}>Cricket</div>
            </div>
          </div>

          <div className="images">
            {firstdata &&
              firstdata.map((ele, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      datagoesfromhere(ele);
                    }}
                  >
                    <img src={ele.snippet.thumbnails.high.url} alt="" />

                    <div className="smalllogo">
                      <img src={ele.snippet.thumbnails.high.url} alt="" />
                      <p>{ele.snippet.title}</p>
                    </div>
                    <p className="colorchange">{ele.snippet.channelTitle}</p>
                    <div className="viewstotal">
                      <p>3.1M views</p>
                      <p style={{ paddingLeft: "10px" }}>7 months ago</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {show && (
        <div className="searchbar">
          {searchtitle &&
            searchtitle.map((ele, index) => {
              return (
                <div
                  className="searchresultssmall"
                  key={index}
                  onClick={() => {
                    handlesearchitem(index);
                  }}
                >
                  <CiSearch className="searchsinic" />
                  <p>{ele.snippet.title.slice(0, 28)}</p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Afterloginhome;
