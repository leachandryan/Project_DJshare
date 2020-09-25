import React from "react";
import regform from "./regform";
import regsuccess from "./regsuccess";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        {}
        <div className="container">
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <h1 className="form-heading">DJ Share</h1>
                <br />
                <br />
                <h2>USER LOGIN</h2>
                <p>Please enter your email and password</p>
              </div>
              <form id="Login">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email Address"
                    defaultValue
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    defaultValue
                  />
                </div>
                <div className="loginOptions">
                  <a className="forgot" href="reset.html">
                    Forgot password?
                  </a>
                  <a
                    data-toggle="modal"
                    data-target="#regForm"
                    className="signUp"
                    href="#regForm"
                  >
                    Sign Up
                  </a>
                </div>
                <button type="button" className="btn btn-primary" id="loginBtn">
                  Login
                </button>
                <a href="/login" className="btn btn-primary">
                  Log in with Spotify
                </a>
              </form>
            </div>
          </div>
        </div>
        {}
        {}
        <regform />
        {}
        {}
        <regsuccess />
        {}
      </div>
    );
  }
}

export default LoginForm;
