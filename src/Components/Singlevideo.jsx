import React from "react";
import Afterloginnavnbar from "../Allsimilar/Afterloginnavnbar";
import "../Css/Singlevideo.css";
import "../Css/Afterloginhome.css";
import ReactPlayer from "react-player";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { Authcontext } from "../Context/Authcontextprovider";
import { useNavigate } from "react-router-dom";
import Loading from "../Allsimilar/Loading";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";

const Singlevideo = () => {
  const navigate = useNavigate();

  const { getdataofsingle, channeliddata, clickandgetData, loadit, show,searchtitle, clicktosearchandget,chenneltitle,handleTitle,} =
    React.useContext(Authcontext);
  console.log(loadit);

  function datagoesfromhere(val) {
    clickandgetData(val);
    handleTitle(val.snippet.title)
    navigate("/Singlevideo");
    window.scrollTo(0, 0);
  }

  function handlesearchitem(index){
    console.log(searchtitle[index].snippet.title);
    handleTitle(searchtitle[index].snippet.title);
    clicktosearchandget(searchtitle[index].snippet.title);
  }

  useEffect(() => {
   document.title = `${chenneltitle}`;
  }, [chenneltitle])
  


  if (loadit) {
    return <Loading />;
  }

  return (
    <>
      <Afterloginnavnbar />

      <div className="videomaindiv">
        {getdataofsingle && (
          <div className="videoandcomm">
            <ReactPlayer
              className="player"
              url={getdataofsingle.videoLink}
              playing={true}
              loop={true}
              width="800px"
              height="470px"
              controls={true}
            />

            <p className="maindesc">{getdataofsingle.snippet.title}</p>

            <div className="allthefuncis">
              <p className="habib">{getdataofsingle.snippet.channelTitle}</p>

              <div className="alllikeanddislikes">
                <BiLike className="iconshere" />
                <BiDislike className="iconshere" />
                <RiShareForwardLine className="iconshere" />
                <LiaDownloadSolid className="iconshere" />
              </div>
            </div>

            <div className="maincommentdiv">
              <div>
                <p>
                  Some Pakistanis creating their own happiness by saying babar
                  rejected 10 crore offer to attend ambanis wedding
                </p>
              </div>

              <div className="makecomment">
                <BiLike className="iconshere" />
                <BiDislike className="iconshere" />
              </div>

              <div></div>
            </div>
            <div className="maincommentdiv">
              <div>
                <p>
                  Babar won matches by narrow margins 5,8,8,4, it's call Luck,
                  no captaincy improvement
                </p>
              </div>

              <div className="makecomment">
                <BiLike className="iconshere" />
                <BiDislike className="iconshere" />
              </div>

              <div></div>
            </div>

            <div className="maincommentdiv">
              <div>
                <p>
                  Some Pakistanis creating their own happiness by saying babar
                  rejected 10 crore offer to attend ambanis wedding
                </p>
              </div>

              <div className="makecomment">
                <BiLike className="iconshere" />
                <BiDislike className="iconshere" />
              </div>

              <div></div>
            </div>
            <div className="maincommentdiv">
              <div>
                <p>
                  Babar won matches by narrow margins 5,8,8,4, it's call Luck,
                  no captaincy improvement
                </p>
              </div>

              <div className="makecomment">
                <BiLike className="iconshere" />
                <BiDislike className="iconshere" />
              </div>

              <div></div>
            </div>
          </div>
        )}

        <div className="extravideo">
          {channeliddata &&
            channeliddata.map((ele, index) => {
              return (
                <div
                  className="videosmall"
                  key={index}
                  onClick={() => {
                    datagoesfromhere(ele);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <img src={ele.snippet.thumbnails.high.url} alt="" />
                  </div>

                  <div className="creativedivone">
                    <p>{ele.snippet.title}</p>
                    <p className="fanone">{ele.snippet.channelTitle}</p>
                    <p className="fanone11">3.7K views</p>
                  </div>
                </div>
              );
            })}
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

export default Singlevideo;
