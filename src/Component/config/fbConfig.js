import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import "firebase/compat/collection"
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCoOcuKWSasGnVWT8gqqKVHCzdULwx5U3M",
    authDomain: "midterm-project-chatroom-ss-22.firebaseapp.com",
    databaseURL: "https://midterm-chatroom-ss2022-d4759-default-rtdb.firebaseio.com",
    projectId: "midterm-project-chatroom-ss-22",
    storageBucket: "midterm-project-chatroom-ss-22.appspot.com",
    messagingSenderId: "826877799598",
    appId: "1:826877799598:web:5efb8971f549ec0984d13f",
    measurementId: "G-6K71M0PNQ5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;



