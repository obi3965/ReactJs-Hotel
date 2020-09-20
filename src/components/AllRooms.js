import React from 'react'
import RoomsFilter from './RoomsFilter'
import { withRoomConsumer } from '../context'
import Roomslist from './RoomsList'
import Loading from './Loading'

function AllRooms({ context }){
     let  { loading, sortedRooms, rooms } = context
        
             if(loading) {
                     return <Loading />
                 }
                 return (
                     <div>
                         
                         <RoomsFilter rooms = { rooms } />
                         <Roomslist rooms = { sortedRooms } />
                     </div>
                 )
}

   

export default withRoomConsumer(AllRooms)
// export default function AllRooms() {
//     return (
//      <RoomConsumer>
//          { value => {
//              console.log(value)
//              let  { loading, sortedRooms, rooms } = value

//              if(loading) {
//                  return <Loading />
//              }
//              return (
//                  <div>
//                      hello from rooms
//                      <RoomsFilter rooms = { rooms } />
//                      <Roomslist rooms = { sortedRooms } />
//                  </div>
//              )
//          }}
          
//      </RoomConsumer>
//     )
    
// }
