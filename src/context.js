import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    roomsFeatured: [],
    loading: true,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    console.log(rooms);
    let roomsFeatured = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      roomsFeatured,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(items) {
    let dataId = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return dataId;
  }


  //GET THE A SINGLE ROOM BY SLUG
  getRoom = slug =>{
      let slugRooms = [...this.state.rooms];
      let room = slugRooms.find(room => room.slug === slug);
      return room
  }
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
