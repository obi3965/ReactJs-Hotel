import React, { Component } from "react";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import AllRooms from '../../components/AllRooms'
import "./Rooms.css";
export default class Rooms extends Component {
  render() {
    return (
      <>
        <div className="rooms-banner">
          <div className="container banner">
            <div className="row">
              <div className="col-md-6">
                <Banner
                  title="enjoy our luxury rooms for all"
                  subtitle="hotel rooms for whole family, all year round. and a luxury stay
               for all. a place where you can enjoy the environment"
                >
                  <Link to="/" className="btn">
                    return home
                  </Link>
                </Banner>
              </div>
              <div className="col-md-6">
                <Hero hero="roomsHero"></Hero>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <AllRooms />
        </div>
      </>
    );
  }
}
