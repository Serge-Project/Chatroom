import React, { useState } from 'react';
import '/Users/sergerigaudjoseph/Desktop/SUCCESS ITNOJ/SCHOOL/SS GEC/Midterm Chatroom Project/Chatroom/src/Component/Style/LogInUp.css'
import { signUp } from '../Auth/authentification';

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { SplitButton, Dropdown } from 'react-bootstrap';


function SignUp(props) {

  //   React.state = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     password: ''
  // }

      const [allValues, setAllValues] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Password: '',
    });

        const SignIn = e => {
          props.setLogstat(true)
        }

      const  CreateUser = (event) => {
          event.preventDefault()
          // console.log(allValues )
          signUp(allValues)
          SignIn()
        }

        const handleChange = e => {
            setAllValues( prevValues => {
              return { ...prevValues,[e.target.name]: e.target.value}
          })
        }

    return (
          <div className="text-center body"> 
            <div id="custom-alert"> </div>         
                <div className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
                        <label  className="sr-only" >Enter your Firstname</label>
                        <input type="text" id="inputEmail" className="form-control" name="Firstname"  placeholder="Firsname" onChange={handleChange} required autoFocus />
                        <label className="sr-only">Enter your Lastname</label>
                        <input type="text" id="inputEmail" className="form-control" name="Lastname" placeholder="Lastname" onChange={handleChange} required autoFocus />
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" name="Email" placeholder="Email address" onChange={handleChange} required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" name="Password" placeholder="Password" onChange={handleChange} required />
                        <div className='last-buttons'>
                            <button className="btn btn-lg btn-primary btn-block" id="btnLogin" onClick={CreateUser}>Sign Up</button>   
                            <button className="btn btn-lg btn-secondary btn-block" id="btnSignUp" onClick={SignIn}>Sign In</button>                    
                        </div>
                </div>
           </div>
    );
  }
  
  export default SignUp;