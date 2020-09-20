import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

let getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({ rooms }) {
  let context = useContext(RoomContext);
  let {
    handleChange,
    type,
    capacity,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  // console.log(context)
  //get unique types
  let types = getUnique(rooms, 'type')
  types = ['all', ...types]
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
      <div className="container">
        <Title title="search your rooms" />
        <div className="row">
          
            <div className="form-group col-md-3">
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

             <div className="form-group col-md-3">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div> 
          
        <div className="form-group col-md-3">
          <label htmlFor="price">room size </label>
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

        <div className="form-group col-md-3">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
