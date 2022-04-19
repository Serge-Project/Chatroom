import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn'



function Loggedstatus() {
  const [Logstat, setLogstat] = useState(true)

 
    if(Logstat) {
          return  (
            < SignIn Logstat={Logstat} setLogstat={setLogstat}/>
          )
    } else {
          return  (
            < SignUp Logstat={Logstat} setLogstat={setLogstat}/>
          )
    }
    
  }
  
  export default Loggedstatus;