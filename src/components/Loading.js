import React from "react";
import loadingGif from "../images/loader.gif";
import './styles/Loader.css'
const Loading = () => {
  return (
  <div className="col">
    <div className="loading">
      
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="loading" />
      </div>
    </div>
  );
};

export default Loading;