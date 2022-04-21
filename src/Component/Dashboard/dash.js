import React  from 'react';
import '../Style/MsgDash.css'
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar'


function Dash(props) {
    // console.log(props.userisLoggedIn)
      return (
            <div className="MsgDash"> 
                  <ResponsiveAppBar userisLoggedIn={props.userisLoggedIn} setuserisLoggedIn={props.setuserisLoggedIn} />
             </div>
      );
    }
    
export default Dash;




