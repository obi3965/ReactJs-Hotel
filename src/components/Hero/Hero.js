import React from "react";

import "./Hero.css";
/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
      <div className="container">
    <div className="home">
      <div className="row">
        <div className="col-6 order-0">
          <div className="hom-banner">
            <h1>welcome to our five star hotel</h1>
            <div className="home-banner-desc">
              <p>
                hotel for the whole family, all year round. and a luxury stay
                for all. a place where you can enjoy the environment
              </p>
            </div>
            <button className="btn">our rooms</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="banner-image">
            <img src="../img/home.svg" alt="home" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
