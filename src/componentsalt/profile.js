import React from "react";

class profile extends React.Component {
  render() {
    return (
      <div id="summary">
        <div id="summarytext">
          <br />
          <h1>User Settings</h1>
          <br />
          <br />
          <p>Current Email Address: *********</p>
          <p />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="New Email Address"
              defaultValue
            />
          </div>
          <button type="button" className="btn" id="emailBtn">
            Set as new Email
          </button>
          <br />
          <br />
          <p />
          <p>Change Your Password</p>
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
          <button type="button" className="btn" id="emailBtn">
            Set as new Password
          </button>
          <br />
          <br />
          <p>Current Spotify ID: ************</p>
          <div className="form-group">
            <input
              type="spotifyID"
              className="form-control"
              id="spotifyIDfield"
              placeholder="Spotify ID"
              defaultValue
            />
          </div>
          <button type="button" className="btn" id="emailBtn">
            Set as new Spotify ID
          </button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default profile;
