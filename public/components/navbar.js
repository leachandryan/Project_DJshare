import React from "react";

class navbar extends React.Component {
  render() {
    return (
      <div id="nav">
        <div id="navitem">
          <h1>
            <a href="homepage.html">
              Home
              <br />
              Page
            </a>
          </h1>
        </div>
        <div id="navitem2">
          <h1>
            <a href="hostplaylist.html">
              Host_'s
              <br />
              Playlists
            </a>
          </h1>
        </div>
        <div id="navitem">
          <h1>
            <a href="usersettings.html">
              User
              <br />
              Settings
            </a>
          </h1>
        </div>
      </div>
    );
  }
}

export default navbar;
