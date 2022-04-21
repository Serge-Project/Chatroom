import React, { useState, useEffect, Suspense } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn'
import Dash from '../Dashboard/dash'
import firebase from '../config/fbConfig'
import CircularColor from '../Loading'





  function Loggedstatus() {

  const [Logstat, setLogstat] = useState(true)
  const [userisLoggedIn, setuserisLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  console.log("sdhjcvjsdhcvjshvcjhsdvkshjdbv kshdbvkshdb")


     firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setuserisLoggedIn(true)
        // console.log('okokokok')
        // User is signed in.
      } else {
        setuserisLoggedIn(false)
        // User is not signed in.
      }
    });

    useEffect(() => {
      setTimeout(() => setLoading(false), 700)
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
        // console.log("User is Signed in then render the dashboard")
        return  (
          < Dash userisLoggedIn={userisLoggedIn} setuserisLoggedIn={setuserisLoggedIn} />
     )} 
  }
  
  export default Loggedstatus;