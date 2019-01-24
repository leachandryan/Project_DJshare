import React, { Component } from 'react';
//import SpotifyPlayer from 'react-spotify-player';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           loggedIn: '',
           
        };
    }


    render() {
        const imageStyle = {
            width: 400
        };
        // const size = {
        //     width: '75%',
        //     height: 300
        // };
        // const view = 'list';
        // const theme = 'black';
      
        return (
            <div>
                {/* <p>It's good to be home!</p> */}
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" alt='' />
                {/* <SpotifyPlayer
                    uri="https://open.spotify.com/album/7mB5yhTfOUdtLdjRAsPY4t"
                    size={size}
                    view={view}
                    theme={theme}
                /> */}
        
            </div>
        )

    };
}

export default Home
