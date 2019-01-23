import React from "react";

class regform extends React.Component {
  render() {
    return (
      <div
        className="modal fade login-modal"
        data-backdrop="static"
        id="regForm"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {}
            <div className="modal-body login-modal-body">
              <h3 className="modal-title text-center">Create An Account</h3>
              <button type="button" className="close" data-dismiss="modal">
                <span>
                  <i className="fa fa-times-circle" aria-hidden="true" />
                </span>
              </button>
              <form className="modal-login-form">
                {}
                <p>Your Email Address</p>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="New Email Address"
                    defaultValue
                  />
                </div>
                <br />
                <p>Set Your Password</p>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="New Password"
                    defaultValue
                  />
                </div>
                <div className="form-group">
                  <input
                    type="confirmpassword"
                    className="form-control"
                    required
                    autoComplete="off"
                    id="confirmpassword"
                    placeholder="Confirm New Password"
                  />
                </div>
                <br />
                <p>Your Spotify ID</p>
                <div className="form-group">
                  <input
                    type="spotifyID"
                    className="form-control"
                    id="spotifyIDfield"
                    placeholder="Spotify ID"
                    defaultValue
                  />
                </div>
                <div className="form-group forgot-pass-fau text-center">
                  <p>By Clicking "SIGN UP" you accept our</p>
                  <a href="/terms-conditions/" className="text-secondary">
                    <span className="text-primary">Terms and Conditions</span>
                  </a>
                </div>
                <div className="btn-check-log">
                  <button
                    type="button"
                    className="btn-check-login"
                    id="signupBTN"
                  >
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default regform;
