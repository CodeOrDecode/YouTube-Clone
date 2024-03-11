import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Authcontext = React.createContext();

const Authcontextprovider = ({ children }) => {
  const navigate = useNavigate();
  let key = "AIzaSyCiyy6sl-bC_HZ2JwaV64cvTtI26W5bol4";

  const [firstdata, setFirstdata] = useState(null);
  const [loadit, setLoadit] = useState(false);
  const [getdataofsingle, setgetdataofsingle] = useState(null);
  const [channeliddata, setChanneliddata] = useState(null);
  const [searchresult1, setSearchresult1] = useState(null);
  const [show, setShow] = useState(false);
  const [searchtitle, setSearchtitle] = useState(null);
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(false);
  const [namedata, setNamedata] = useState(null);
  const [progress, setProgress] = useState(0);
  const [chenneltitle, setChenneltitle] = useState(null);

  function handleTitle(value) {
    setChenneltitle(value);
    // console.log(value);
  }

  function saveDataToLocalStorage(saveit) {
    localStorage.setItem("firstname", JSON.stringify(saveit.firstname));
    localStorage.setItem("lastname", JSON.stringify(saveit.lastname));
    localStorage.setItem("email", JSON.stringify(saveit.email));
    localStorage.setItem("password", JSON.stringify(saveit.password));
    let totalname = saveit.firstname + " " + saveit.lastname;
    setNamedata(totalname);
    setAuth(true);
    setError(false);
    navigate("/afterloginhome");
  }

  function checkDataFromLocal(data) {
    let getEmail = JSON.parse(localStorage.getItem("email"));
    let getPassword = JSON.parse(localStorage.getItem("password"));
    let getFirstname = JSON.parse(localStorage.getItem("firstname"));
    let getLastname = JSON.parse(localStorage.getItem("lastname"));
    if (getEmail == data.email && getPassword == data.password) {
      setAuth(true);
      setError(false);
      let totalname = getFirstname + " " + getLastname;
      setNamedata(totalname);
      navigate("/afterloginhome");
    } else {
      setAuth(false);
      setError(true);
    }
  }

  function handleErrorReset() {
    setError(false);
  }

  function handelSignout() {
    setAuth(false);
    navigate("/");
  }

  async function clicktosearchandget(val) {
    setProgress(10);
    setLoadit(true);
    let urlsearch = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${val}&key=${key}&maxResults=50`;
    try {
      let res = await fetch(urlsearch);
      let finalData = await res.json();

      let allData = finalData.items.map((ele) => {
        return {
          ...ele,
          videoLink: `https://www.youtube.com/embed/${ele.id.videoId}`,
        };
      });
      console.log(allData);
      setProgress(30);

      setChanneliddata(null);
      setShow(false);
      setSearchresult1(allData);
      setLoadit(false);
      setProgress(100);
      navigate("/Searchvideo");
    } catch (error) {
      setLoadit(false);
      setShow(false);
      console.log(error);
    }
  }

  function clickandgetData(value) {
    setLoadit(true);
    setShow(false);
    setTimeout(() => {
      setgetdataofsingle(value);
      getChennelRelatedData(value.snippet.channelId);
      setLoadit(false);
    }, 1500);
  }

  let id;

  function handleshowsearch(val) {
    setShow(true);
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      searchData3(val);
    }, 1500);
  }

  async function searchData3(value) {
    let urlsearch = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${key}&maxResults=14`;
    try {
      let res = await fetch(urlsearch);
      let finalData = await res.json();
      let allData = finalData.items.map((ele) => {
        return {
          ...ele,
          videoLink: `https://www.youtube.com/embed/${ele.id.videoId}`,
        };
      });
      console.log(allData.slice(0, 14));
      setSearchtitle(allData.slice(0, 14));
    } catch (error) {
      console.log(error);
    }
  }

  function handleClose() {
    setShow(false);
  }

  async function getChennelRelatedData(data1) {
    setProgress(10);
    let url5 = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${data1}&part=snippet,id&order=date&maxResults=50`;
    try {
      let res = await fetch(url5);
      let finalData = await res.json();
      setProgress(50);
      let allData = finalData.items.map((ele) => {
        return {
          ...ele,
          videoLink: `https://www.youtube.com/embed/${ele.id.videoId}`,
        };
      });
      setProgress(100);
      setChanneliddata(allData);
    } catch (error) {
      console.log(error);
    }
  }

  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${key}&maxResults=50`;

  async function getData() {
    setProgress(10);
    setLoadit(true);
    try {
      let res = await fetch(url);
      let finalData = await res.json();
      setProgress(50);
      let allData = finalData.items.map((ele) => {
        return { ...ele, videoLink: `https://www.youtube.com/embed/${ele.id}` };
      });
      console.log(allData);
      setChanneliddata(null);
      setFirstdata(allData);
      setLoadit(false);
      setProgress(100);
    } catch (error) {
      console.log(error);
      setLoadit(false);
    }
  }

  async function clickData(value) {
    setProgress(10);
    setLoadit(true);
    let url3 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&key=${key}`;
    try {
      let res = await fetch(url3);
      let finalData = await res.json();
      setProgress(50);

      let allData = finalData.items.map((ele) => {
        return {
          ...ele,
          videoLink: `https://www.youtube.com/embed/${ele.id.videoId}`,
        };
      });
      setProgress(100);
      console.log(allData);
      setChanneliddata(null);
      setFirstdata(allData);
      setLoadit(false);
    } catch (error) {
      setLoadit(false);
      console.log(error);
    }
  }

  async function clickData2(value) {
    setProgress(10);
    setLoadit(true);
    let url3 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&key=${key}`;
    try {
      let res = await fetch(url3);
      let finalData = await res.json();
      setProgress(50);
      let allData = finalData.items.map((ele) => {
        return {
          ...ele,
          videoLink: `https://www.youtube.com/embed/${ele.id.videoId}`,
        };
      });
      setProgress(100);
      console.log(allData);
      setChanneliddata(null);
      setSearchresult1(allData);
      setLoadit(false);
    } catch (error) {
      setLoadit(false);
      console.log(error);
    }
  }

  async function serachResults(value) {
    setProgress(10);
    setLoadit(true);
    let url10 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&key=${key}`;
    try {
      let res = await fetch(url10);
      let finalData = await res.json();
      setProgress(50);
      let allData = finalData.items.map((ele) => {
        return {
          ...ele,
          videoLink: `https://www.youtube.com/embed/${ele.id.videoId}`,
        };
      });
      console.log(allData);
      setChanneliddata(null);
      setProgress(100);
      setSearchresult1(allData);
      setShow(false);
      navigate("/searchvideo");
      setLoadit(false);
    } catch (error) {
      setLoadit(false);
      setShow(false);
      console.log(error);
    }
  }

  return (
    <Authcontext.Provider
      value={{
        getData,
        firstdata,
        clickData,
        loadit,
        clickandgetData,
        getdataofsingle,
        channeliddata,
        serachResults,
        searchresult1,
        clickData2,
        handleshowsearch,
        show,
        handleClose,
        searchtitle,
        clicktosearchandget,
        auth,
        saveDataToLocalStorage,
        handelSignout,
        error,
        checkDataFromLocal,
        handleErrorReset,
        namedata,
        progress,
        handleTitle,
        chenneltitle,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default Authcontextprovider;
