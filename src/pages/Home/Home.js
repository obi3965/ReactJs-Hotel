

import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import FeaturedRooms from "../../components/FeaturedRoom";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <>
      <div className="home-banner">
        <div className="container home">
          <div className="row ">
            <div className="col-md-6">
              <Banner className="home-row"
                title="welcome to our five star hotel"
                subtitle="hotel for the whole family, all year round. and a luxury stay
                for all. a place where you can enjoy the environment"
              >
                <Link to="/rooms" className="btn">
                  our rooms
                </Link>
              </Banner>
            </div>
            <div className="col-md-6">
              <Hero></Hero>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Services />
        <FeaturedRooms />
      </div>
    </>
  );
};

export default Home;
