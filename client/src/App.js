import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from "./components/Login/LoginForm"
import SignupForm from './components/SignupForm'
import Theappin from "./components/theappin"
import Logout from "./components/Logout"

const App = props => {
   return(<Router>
       <Switch>
             <Route exact path = "/" render={() => <div>
                  <SignupForm />
                  <LoginForm />
                  <Logout />
                </div>} />
              <Route exact path = "/valid/:id" component = {Theappin} />

          </Switch>

    </Router>)
}

// const App = props => {
// 	if (props.loggedIn) {
// 		return (
// 			<nav className="navbar">
// 				<ul className="nav">
// 					<li className="nav-item">
// 						<Link to="/" className="nav-link">
// 							Home
// 						<  /Link>
// 					</li>
// 					<li>
// 						<Link to="#" className="nav-link" onClick={props._logout}>
// 							Logout
// 						</Link>
// 					</li>
// 				</ul>
// 			</nav>
// 		)
// 	} else {
// 		return (
// 			<nav className="navbar">
// 				<ul className="nav">
// 					<li className="nav-item">
// 						<Link to="/" className="nav-link">
// 						  Home
// 						</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link to="/login" className="nav-link">
// 							Login to Account
// 						</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link to="/signup" className="nav-link">
// 							Sign Up - Create an account
// 						</Link>
// 					</li>
// 				</ul>
// 			</nav>
// 		)
// 	}
// }




export default App
