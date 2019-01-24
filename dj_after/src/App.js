import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import SpotifyPlayer from 'react-spotify-player';

// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Navbar from './components/navbar';
import Home from './components/home';
import Spotify from './components/spotify-login2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser (userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get('/user/').then(response => {
      //console.log('Get user response: ');
      //console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ');

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    const size = {
      width: '100%',
      height: 300
  };
  const view = 'list';
  const theme = 'black';

    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &
          <p>Join the party, {this.state.username}!</p> 
          
          &

          <Spotify /> 
          
          &
           
          <SpotifyPlayer
                    uri="https://open.spotify.com/album/7mB5yhTfOUdtLdjRAsPY4t"
                    size={size}
                    view={view}
                    theme={theme}
                />
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />

      </div>
    );
  }
}

export default App;
