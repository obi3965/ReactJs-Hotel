import React from "react";
import loadingGif from "../images/loader.gif";
const Loader = () => {
  return (
    <div className="loading">
      <h4>rooms data loading....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loader;