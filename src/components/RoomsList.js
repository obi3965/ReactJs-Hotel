import React from 'react'
import Room from '../components/Room'
export default function Roomslist({ rooms }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    {rooms.map(item =>{
                   return  <Room key={item.id} room={item} />
                      
                        
                      
                   
                })}
                </div>
            </div>
        </>
    )
}
