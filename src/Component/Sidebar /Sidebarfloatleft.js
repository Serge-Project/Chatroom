import * as React from 'react';
import "../Style/sidebarLeft.css"
import RoomList from "../CreateRooms/RoomList"


function SidebarLeft(props) {
  return (
   
        <div id="mySidenav" className="sidenav">
          <div className="Roomie">
              <RoomList  Rooms={props.Rooms} 
                         Selectedrooms={props.Selectedrooms} 
                         handlesetselectedrooms={props.handlesetselectedrooms}
                         setState={props.setState}

                          />
          </div>
        </div>
  );
}

export default SidebarLeft