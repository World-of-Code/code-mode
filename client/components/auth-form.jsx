'use strict'

import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

class AuthForm extends Component{
  constructor(props){
    super(props)
  }

  handleOAuthSubmit() {
    chrome.identity.getAuthToken({
      interactive: true
    },(token)=>{
      if(chrome.runtime.lastError){
        alert(chrome.runtime.lastError.message);
        return
      }
      let request = new XMLHttpRequest()
      request.open('GET', 'https://wwww.googleapis.com/outh2/v1/userinfo?alt=json&access_token='+token)
      request.onload = ()=>{
        alert(response.response)
      }
      response.send()
    })

  }

render(){
  const { name, displayName, handleSubmit, error } = this.props
  return (
    <div>
      <form onSubmit={ handleSubmit } name={ name }>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="email" required/>
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" minLength="3" required/>
        </div>
        <div>
          <button type="submit">{ displayName }</button>
        </div>
        { error && error.response && <div> { error.response.data } </div> }
      </form>
      <button onClick ={this.handleSubmit}>{ displayName } with YouTube</button>
      {/* <a href="http://background.html">{ displayName } with Youtube</a> */}
    </div>
  )
}
}



const mapLogin = state => ({
  name: 'login',
  displayName: 'Login',
  error: state.user.error
})

const mapSignup = state => ({
  name: 'signup',
  displayName: 'Sign Up',
  error: state.user.error
})

const mapDispatch = dispatch => ({
  handleSubmit: evt => {
    evt.preventDefault()
    dispatch(auth(evt.target.email.value, evt.target.password.value, evt.target.name))
  }
})

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
