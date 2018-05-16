 import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
//import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			redirectTo: null,
        loggedIn :'',
        user: ''
    }
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

  _login() {
		axios
			.post('/auth/login', {
		  	email:this.state.email,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
          console.log("The resonsedata:",response.data)
					this.setState({
						loggedIn: true,
						user: response.data.user,
            redirectTo: '/valid/'+response.data.user._id
					},() => {console.log("state",this.state.user)})

				}
			})
	}

  handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this._login()
    console.log("Login")
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm">
					<h1>Login form</h1>
					<form>
										<label htmlFor="email">Email: </label>
										<input
											type="text"
											name="email"
											value={this.state.email}
											onChange={this.handleChange}
										/>
										<label htmlFor="password">Password: </label>
										<input
											type="password"
											name="password"
											value={this.state.password}
											onChange={this.handleChange}
										/>
										<button onClick={this.handleSubmit}>Login</button>
					</form>

			 </div>
			)
		}
	}
}

export default LoginForm
