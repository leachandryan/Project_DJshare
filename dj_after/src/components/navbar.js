import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div id="background">
            <video autoPlay muted loop id="myVideo">
              <source
                src="https://d2v9y0dukr6mq2.cloudfront.net/video/preview/GTYSdDW/dj-mixer-at-night-club_n3m4pitul__PM.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
            <div id="nav">

                <header id="navitem">
                    <div className="col" >
                        {loggedIn ? (
                            <section className="navbar-section" >
                                <Link to="#" className="btn btn-link" onClick={this.logout}>
                                <span >logout</span></Link>

                            </section>
                        ) : (
                                <section className="navbar-section" id="navitem">
                                    <Link to="/" className="btn btn-link" id="navitem">
                                        <span >Home</span>
                                        </Link>
                                    <Link to="/login" className="btn btn-link" id="navitem">
                                    <span >Login</span>
				</Link>
                                    <Link to="/signup" className="btn btn-link" id="navitem">
                                    <span >Sign Up</span>
				</Link>
                                    <Link to="/playlist" className="btn btn-link" id="navitem">
                                    <span >Play List</span>
				</Link>
                                </section>
                            )}
                    </div>
                    
                </header>
            </div>
            </div>
        );

    }
}

export default Navbar