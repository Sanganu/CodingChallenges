import React, { Component } from 'react'
import axios from 'axios'

class Logout extends Component {
        state = {
          loggedIn :'',
          user: ''
        }
            userlogout(event) {
            event.preventDefault()
            console.log('logging out')
            axios.post('/auth/logout').then(response => {
              console.log(response.data)
              if (response.status === 200) {
                this.setState({
                  loggedIn: false,
                  user: null
                }) //state
              } // if
            }) //axios
          } //logut/

        render(){
          return(<button name="lgout" onClick={this.userlogout}>Bye</button>)
        }
}

export default Logout
