import React from "react";

class background extends React.Component {
  render() {
    return (
      <div id="background">
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://d2v9y0dukr6mq2.cloudfront.net/video/preview/GTYSdDW/dj-mixer-at-night-club_n3m4pitul__PM.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
    );
  }
}

export default background;
