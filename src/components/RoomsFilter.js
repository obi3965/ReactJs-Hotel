import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import './styles/Room.css'
let getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({ rooms }) {
  let context = useContext(RoomContext);
  let {
    handleChange,
    type,
    // capacity,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  // console.log(context)
  //get unique types
  let types = getUnique(rooms, 'type')
  types = ['All', ...types]
  types = types.map((item, index)=>{
    return<option key={index} value={item}>
    {item}
  </option>
  })
  // get unique capacity
  let people = getUnique(rooms, "capacity");
 
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <>
      <div className="container pt-5">
        <div className="search-title">
          <h1 id="title"><Title title="search rooms"  /></h1>
        
        </div>
        
        <div className="row mt-5">
          
            <div className="form-group col-md-3 col-sm-6 col-xs-6">
              <label for="type">All</label>
              <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
            </div>

             <div className="form-group col-md-3 col-sm-6 col-xs-6">
          <label htmlFor="capacity">Guests</label>
          <select
            
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
           
          >
            {people}
          </select>
        </div> 
          
        <div className="form-group col-md-3 col-sm-6 col-xs-6">
          <label htmlFor="price">Room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        <div className="form-group col-md-3 col-sm-6 col-xs-6">
          <div className="check">
            <div className="form-group form-check">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="breakfast">Pets</label>
          </div>
          </div>
          
        </div>
        
        </div>
        
      </div>
    </>
  );
}
