import firebase from '../config/fbConfig'
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
// import React, {useState} from "react";
import { getFirestore } from 'firebase/firestore'




export const LogInWithGoogle = () => {
   
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function () {
            UpdateProfileforGoogle()
            // window.location = "index.html";
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            create_alert("error", errorMessage);
        });
}

const UpdateProfileforGoogle = async () => {

    const auth = getAuth()
    const user = auth.currentUser;

    if (user) {
        var email = user.email
        var Name = ""
        var Username = ""

        if (email.indexOf('@') !== -1) {
            Name = email.split('@')[0];
            Username = Name[0]+Name[1]
            Username = Username.toUpperCase()
            }
            
    } else {
        create_alert("No current User")
    }


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const db = getFirestore();
             setDoc(doc(db, "Users", user.uid),
              { 
                  
                Name,
                Username

              }).then(function () {
                create_alert("Success", "Your Profile is updated!");
              }).catch(function (error) {
                var errorMessage = error.message;
                create_alert("An error has occured", errorMessage);
              });
        } else {
            create_alert("User is not registered !");
        }
      });
}


export const LogIn = (Credentials) => {
   
    var email = Credentials.Email
    var password = Credentials.Password

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            // console.log("Congratulation", "You are logged in")
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            create_alert("error", errorMessage);
            Credentials.Email = "";
            Credentials.Password = "";
    });
}

export const signUp = async (newUser) => {
    var email = newUser.Email
    var password = newUser.Password

    await firebase.auth().createUserWithEmailAndPassword(
        email, 
        password
        ).then((resp) => {
           UpdateProfile(newUser)
        }).then(function () {
            create_alert("success", "You can sign in  right now!");
            newUser.Firstname = "";
            newUser.Lastname = "";
            newUser.email = "";
            newUser.password = "";
        })
        .catch(function (error) {
            var errorMessage = error.message;
            create_alert("error", errorMessage);
            newUser.Firstname = "";
            newUser.Lastname = "";
            newUser.email = "";
            newUser.password  = "";
        });
}

const UpdateProfile = async (newUser) => {
    // console.log(firebase)
    
    var Name =  newUser.Firstname + ' ' + newUser.Lastname.toUpperCase();
    var Username = newUser.Firstname[0] + newUser.Lastname[0];

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const db = getFirestore();
             setDoc(doc(db, "Users", user.uid),
              { 

                  Name,
                  Username

              }).then(function () {
                create_alert("Success", "Your Profile is updated!");
              }).catch(function (error) {
                var errorMessage = error.message;
                create_alert("An error has occured", errorMessage);
              });
        } else {
            create_alert("User is not registered !");
        }
      });
}


export const signOut = () => {

    firebase.auth().signOut()
    .then(function () {
        create_alert("You have succesfully sign out");
    })
    .catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        create_alert("error", errorMessage);
    });
}


function create_alert(type, message) {
    var alertarea = document.getElementById('custom-alert');
    if (type === "success") {
        var str_html = "<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>Success! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    }
    else if (type === "error") {
        str_html = "<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Error! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
        alertarea.innerHTML = str_html;
    }
}