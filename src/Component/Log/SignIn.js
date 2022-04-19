import React, { useState } from 'react';
import "/Users/sergerigaudjoseph/Desktop/SUCCESS ITNOJ/SCHOOL/SS GEC/Midterm Chatroom Project/chatroom/src/Style/LogInUp.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogIn } from '../Auth/authentification'
import { LogInWithGoogle } from '../Auth/authentification'


function SignIn(props) {

        const [Credentials, setCredentials] = useState({
          Email: '',
          Password: '',
      });
      
      const SignUp = e => {
        props.setLogstat(false)
      }

      const UserLogIn = (event) => {
        event.preventDefault()
        LogIn(Credentials)

      }

      const GoogLogIn = (event) => {
        event.preventDefault()
        LogInWithGoogle()
      }

      const handleChange = e => {
        setCredentials( prevCredential => {
          return { ...prevCredential,[e.target.name]: e.target.value}
      })
    }

    return (
          <div className="text-center body"> 
            <div id="custom-alert">
            </div>         
            <div className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in/register</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" name="Email" placeholder="Email address" onChange={handleChange} required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" name="Password"placeholder="Password" onChange={handleChange} required />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <div className='last-buttons'>
                        <button className="btn btn-lg btn-primary btn-block" id="btnLogin" onClick={UserLogIn}>Sign in</button>
                        <button className="btn btn-lg btn-info btn-block" id="btngoogle" onClick={GoogLogIn}>Sign in with Google</button>
                        <div>
                             <button className="btn btn-lg btn-secondary btn-block" id="btnSignUp" onClick={SignUp}>New account</button>
                        </div>    
                    </div>    
            </div>
      </div>
    );
  }
  
  export default SignIn;