import React, { Component } from "react";
// import defaultBcg from "../../images/room-1.jpeg";
import { Link } from "react-router-dom";
// import Banner from "../../components/Banner";
// import Hero from "../../components/Hero";
import { RoomContext } from "../../context";
//import Errors from '../Errors/Errors';
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    // console.log(props)
    this.state = {
      slug: this.props.match.params.slug,
      // defaultBcg,
    };
  }

  static contextType = RoomContext;

  componentDidMount() {}
  render() {
    let { getRoom } = this.context;
    let room = getRoom(this.state.slug);
    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room is found here</h3>
          <Link to="/rooms" className="btn">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    return (
      <>
      <div className="single-room-banner">
          {/* < Hero hero="roomsHero">
        {/* <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn">
              back to rooms
            </Link>
          </Banner> 
        
      </Hero> */}
      </div>
    

      
      <div className="container">
          <div className="row">
            {images.map((item, index) => (
              <div className="col-md-3">
                <div className="single-room-image">
                  <img key={index} src={item} alt={name} />
                </div>
                 
              </div>
             
            ))}
          </div>


         <div className="details">
             <h2>details</h2>
           </div>
         <div className="row">
           <div className="col-md-6">
             <div className="decription">
               <p>{description}</p>
             </div>
           </div>
           <div className="col-md-3 text-center">
             <h2>info</h2>
             <div className="decription">
               <p> price: ${price}</p>
              <p> size: {size}</p>
              <p>capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`} </p>
              <p>{pets ? "pets allowed" : "no pets allowed"}</p>
              <p>{breakfast && "free breakfast included"}</p>
             </div>
           </div>

           <div className="col-md-3">
           <div className="extra-title">
             <h2>extras</h2>
           </div>
           <ol className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ol>
         </div>
         </div>

       
        </div>
       
     
      </>
    );
  }
}
