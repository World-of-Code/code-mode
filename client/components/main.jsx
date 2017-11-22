'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'


const Main = props => {
  const { children, handleClick, isLoggedIn } = props

  return (
    <div>
      <nav>
        {
          isLoggedIn
            ? <div>
                {/* <Link to="/home">Home</Link> */}
                <a href="/logout" onClick={ handleClick }>Logout</a>
              </div>
            : <div>
              <button onClick={ handleClick }>login</button>
              <button onClick={ handleClick }>signup</button>
                {/* <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link> */}
              </div>
        }
      </nav>
      <hr />
      { children }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  handleClick: () => dispatch(logout())
})

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}


export default withRouter(connect(mapState, mapDispatch)(Main))
