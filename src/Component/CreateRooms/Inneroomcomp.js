import * as React from 'react';
import "../Style/RoomList.css"

const Inneroomcomp = (props)  => {

   const styles = props.Selectedrooms === props.room.id ? 'active-room': 'RoomList'
    function handlehandle (event)  {
        event.preventDefault()
        props.handlesetselectedrooms(props.room.id)
      }
    return (
        <div  className={styles}>
            <li><a onClick= {handlehandle} >{props.room.title}</a></li>
        </div>
    )
}
export default Inneroomcomp