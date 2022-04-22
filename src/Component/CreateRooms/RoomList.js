import * as React from 'react';
import "../Style/RoomList.css"
import Inneroomcomp from "./Inneroomcomp"


function RoomList(   props  )      {

    if((props.Rooms === undefined) || (props.Rooms === null)){
    } else {
        return (
            <aside className='menu' style={{fontsize: '40px', color:'white'}}>
              <h1 className='mneu-list'>CHATROOMS</h1>
              <ul>
              {
              Object.keys(props.Rooms)
                      .map(roomKey => { return {...props.Rooms[roomKey] , id: roomKey}})
                      .map(roomObj => 
                      <Inneroomcomp key={roomObj.id} 
                                                  room={roomObj} 
                                                  Selectedrooms={props.Selectedrooms} 
                                                  handlesetselectedrooms={props.handlesetselectedrooms}
                                                  setState={props.setState}
                                                  />
                                              )}
               </ul>
            </aside>
         
        );
    }
  
}
export default RoomList