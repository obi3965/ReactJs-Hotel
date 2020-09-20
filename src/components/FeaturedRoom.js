import React, { Component } from "react";
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from "./Title";


export default class FeaturedRooms extends Component {
  static contextType = RoomContext
  render() {
   let {loading, featuredRooms : rooms } = this.context
  //  console.log(rooms)
  // this.context
  rooms = rooms.map(room =>{
    return <Room key={room.id} room={room} />
  })
  
   
    return (
      <>

        <Title title="our featured rooms"  />
        <div className="container">
         <div className="row text-center">{ loading ? <Loading /> : rooms }</div> 
       
         
        </div>
      </>
    );
  }
}
