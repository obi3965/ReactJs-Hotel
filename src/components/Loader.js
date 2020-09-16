import React from "react";
import "./Loader.css";
/**
 * @author
 * @function Loader
 **/

const Loader = (props) => {
  return (
    <div className="loader">
      
        <div className="row text-center">
          <div className="col-md-12">
            <div class="background">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Loader;
