import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../../../context'
import Errors from '../Errors/Errors';
export default class Singlerooms extends Component {
  constructor(props){
    super(props);

    this.state ={
      slug: this.props.match.params.slug,
      
    }
  }

  static contextType = RoomContext;


  render() {
    let { getRoom } = this.context;
    let room = getRoom(this.state.slug)
    
    if(!room){
      return <div className="error">
       
       <Errors />
      </div>
    }

    let { name, description, capacity, size, price, extras, breakfast, pets, images } = room
     
    return (
      <>
        {images.map((item, index) => (
        <img key={index} src={item.images} /> 
    ))}
        
      </>
    )
  }
}
