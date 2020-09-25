import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

	render() {
		return (
		  <div
			className="SignupForm"
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
// render() {
// 	return (
// 		<div className="SignupForm">
// 			<h4>Sign up</h4>
// 			<form className="form-horizontal">
// 				<div className="form-group">
// 					<div className="col-1 col-ml-auto">
// 						<label className="form-label" htmlFor="username">Username</label>
// 					</div>
// 					<div className="col-3 col-mr-auto">
// 						<input className="form-input"
// 							type="text"
// 							id="username"
// 							name="username"
// 							placeholder="Username"
// 							value={this.state.username}
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 				</div>
// 				<div className="form-group">
// 					<div className="col-1 col-ml-auto">
// 						<label className="form-label" htmlFor="password">Password: </label>
// 					</div>
// 					<div className="col-3 col-mr-auto">
// 						<input className="form-input"
// 							placeholder="password"
// 							type="password"
// 							name="password"
// 							value={this.state.password}
// 							onChange={this.handleChange}
// 						/>
// 					</div>
// 				</div>
// 				<div className="form-group ">
// 					<div className="col-7"></div>
// 					<button
// 						className="btn btn-primary col-1 col-mr-auto"
// 						onClick={this.handleSubmit}
// 						type="submit"
// 					>Sign up</button>
// 				</div>
// 			</form>
// 		</div>

// 	)
// }
}

export default Signup
