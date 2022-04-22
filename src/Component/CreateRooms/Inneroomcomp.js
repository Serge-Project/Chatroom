import * as React from 'react';
import "../Style/RoomList.css"

// {room, Selectedrooms, handlesetselectedrooms}

const Inneroomcomp = (props)  => {
   
var global=''

   const styles = props.Selectedrooms === props.room.id ? 'active-room': 'RoomList'

  //  console.log("selecter room: " + props.Selectedrooms)
  //  console.log("Room clicked" + props.room.id)

  


    function handlehandle (event)  {
        event.preventDefault()
        // global =  props.room.id
        props.handlesetselectedrooms(props.room.id)
        
      }

    //   React.useEffect(() => {
    //       console.log('hfhghgchgchgchchgcgh')
    //     props.setState({
    //         Selectedrooms : global
    //       })
    //   }, [])

      // console.log(props.Selectedrooms)
    return (
        <div  className={styles}>
            <li><a onClick= {handlehandle} >{props.room.title}</a></li>
        </div>
    )
}

export default Inneroomcomp