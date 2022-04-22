import React, { useState, useEffect } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn'
import Dash from '../Dashboard/dash'
import firebase from '../config/fbConfig'
import CircularColor from '../Loading'
import SidebarLeft from "../Sidebar /Sidebarfloatleft"
// import SidebarRight from "../Sidebar /Sidebarfloatlright"






  function Loggedstatus() {

  const [Logstat, setLogstat] = useState(true)
  const [userisLoggedIn, setuserisLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const [State, setState] = useState(
      {
          rooms: {
            'jhally': {
                title: 'TripFriends',
                author: 'serge@gmail.com',
                created: Date.now()
            },
            'MrJoe': {
                title: 'Schoolstuff',
                author: 'serge@gmail.com',
                created: Date.now()
            }
          },

          Selectedrooms: 'jhally',
      }
    )

    const handlesetselectedrooms = (id) => {
        const newTodos = {...State};
        newTodos["Selectedrooms"] = id;
        setState(newTodos); 
    }
   
  const CheckLogger = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setuserisLoggedIn(true)
        // console.log(user.uid)
        // console.log('okokokok')
        // User is signed in.
      } else {
        setuserisLoggedIn(false)
        // User is not signed in.
      }
    });
  }


    useEffect(() => {
      CheckLogger()
    }, [])
    useEffect(() => {
      setTimeout(() => setLoading(false), 3000)
    }, [])

      if( !userisLoggedIn) {
          if(Logstat) {
                if(loading){
                  return (
                    <CircularColor/>
                )}
                else{
                  return  (
                    < SignIn userisLoggedIn={userisLoggedIn} setuserisLoggedIn={setuserisLoggedIn} Logstat={Logstat} setLogstat={setLogstat}/>
                  )
                }
                
            } else {
                  return  (
                    < SignUp Logstat={Logstat} setLogstat={setLogstat}/>
           )}

      }else{
        return  (
          <div className="columns vh-100 is-gapless">
               < Dash  />
                    <SidebarLeft Rooms={State.rooms} 
                                  Selectedrooms={State.Selectedrooms} 
                                  handlesetselectedrooms={handlesetselectedrooms}
                                  setState={setState}
                                  /> 
          </div> 
     )} 
  }
  
  export default Loggedstatus;