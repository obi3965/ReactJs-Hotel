import React, { Component } from "react";
import { RoomContext } from "../../context";
import Loader from "../Loader";
import Title from "../Title";
import Room from "../Room/Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, roomsFeatured: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <>
        <Title title="featured rooms" />
        <div className="container">
        <div className="row">{loading ? <Loader /> : rooms}</div>
        </div>
      </>
    );
  }
}
