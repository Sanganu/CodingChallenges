import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
//import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

const Theappin = ( {user}) =>{
      return(<div><h3>Hello!!! {user}
             ID:user.params.id</h3>
        </div>  )
  }

export default Theappin
