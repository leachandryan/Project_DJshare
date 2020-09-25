import React from "react";

class playlist extends React.Component {
  render() {
    return (
      <div id="summary">
        <div id="summarytext">
          <br />
          <br />
          <h1>Manage Playlists</h1>
          <br />
          <div id="createplaylistpanel">
            <input
              type="createplaylist"
              className="form-control"
              id="createplaylist"
              placeholder="Name of New Playlist"
              defaultValue
            />
            <button type="button" className="btn" id="createplaylistBTN">
              Create Playlist
            </button>
          </div>
          <br />
          <br />
          <h3>Available Playlists</h3>
          <ul id="playlistList">
            <li>Playlist 1</li>
            <li>Playlist 2</li>
            <li>Playlist 3</li>
          </ul>
          <button type="button" className="btn" id="selectplaylistBTN">
            Select Playlist
          </button>
          <button type="button" className="btn" id="deleteplaylistBTN">
            Delete Playlist
          </button>
          <br />
          <br />
          <h3>Current Playlist</h3>
          <br />
          <iframe
            src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
            width={900}
            height={500}
            frameBorder={0}
            allowTransparency="true"
            allow="encrypted-media"
          />
          <br />
          <br />
          <h3>Invite Guest to Playlist Room</h3>
          <br />
          <p>
            To invite guests to join your Playlist Room, send the hyperlink
            below via text, email, slack, ext...
          </p>
          <br />
          <p>Insert Hyperlink Here</p>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default playlist;
