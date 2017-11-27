'use strict'

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props

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
      <a href="/auth/youtube">{ displayName } with Youtube</a>
    </div>
  )
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

// fetch('https://code-mode-herokuapp.com/api/users')
// .then(
//   function(response) {
//     if (response.status !== 200) {
//       console.log('Looks like there was a problem. Status Code: ' +
//         response.status);
//       return;
//     }
//     response.json().then(function(data) {
//       console.log(data);
//     });
//   }
// )
// .catch(function(err) {
//   console.log('Fetch Error :-S', err);
// });

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


// const request = new XMLHttpRequest()
// request.open('GET', 'https://code-mode-herokuapp.com/api/users')  // sync
// request.send()