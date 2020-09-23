import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import './FeatureRooms.css'
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <>
        <div className="featured-rooms-title">
          <h1><Title title="our featured rooms" /></h1> 
          <div className="underline-1"></div>
        </div>
         
         <div className="featured-rooms-box">
          <div className="container">
          <div className="row text-center">{loading ? <Loading /> : rooms}</div>
        </div> 
         </div>
        
      </>
    );
  }
}
