import React from 'react';
import "./Style/SignUp.css"
import { SplitButton, Dropdown } from 'react-bootstrap';


function SignUp() {
    return (
          <div className="text-center body"> 
            <div id="custom-alert">
            </div>         
            <div className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in/register</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" id="btnLogin">Sign in</button>
                    <button className="btn btn-lg btn-info btn-block" id="btngoogle">Sign in with Google</button>
                    <button className="btn btn-lg btn-secondary btn-block" id="btnSignUp">New account</button>
            </div>
      </div>
    );
  }
  
  export default SignUp;