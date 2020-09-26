import React from 'react'
import Room from '../components/Room'
import SubscirbeForm from '../components/Subscribe-form'
export default function Roomslist({ rooms }) {
    return (
        <>
        < div className="roomlist">
            <div className="container">
                <div className="row">
                    {rooms.map(item =>{
                   return  <Room key={item.id} room={item} />
                      
                        
                      
                   
                })}
                </div>
            </div>
        </div>

          <SubscirbeForm />
        </>
    )
}
