import React from "react";
import "../Css/Loading.css";

const Loading = () => {
  return (
    <>
      <div className="loadingdiv">
        <img
          style={{ width: "50%" }}
          src="https://acegif.com/wp-content/uploads/loading-29.gif"
          alt=""
        />
      </div>
    </>
  );
};

export default Loading;
