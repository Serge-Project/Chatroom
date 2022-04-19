import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import firebaseApp from './config/fbConfig';
import Mainbody from './Component/Mainbody'


// console.log(firebaseApp)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Mainbody />
    {/* <SignUp /> */}
  </React.StrictMode>
);
