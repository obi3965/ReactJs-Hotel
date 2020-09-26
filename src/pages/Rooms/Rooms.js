import React, { Component } from "react";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import AllRooms from '../../components/AllRooms'

import Footer from "../../components/Footer";
export default class Rooms extends Component {
  render() {
    return (
      <>
        <div className="rooms-banner">
          
            <Hero hero="roomsHero"></Hero>
              
                <Banner
                  title="enjoy our luxury rooms for all"
                  subtitle="Hotel rooms for whole family, all year round. and a luxury stay
               for all. a place where you can enjoy the environment"
                >
                  <Link to="/" className="btn">
                    return home
                  </Link>
                </Banner>
              
               
               
            
            
          
        </div>

        <div className="container">
          <AllRooms />
        </div>

        
          <Footer/>
        
      </>
    );
  }
}
