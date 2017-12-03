'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import PopupMain from '../PopupMain'
import { Provider } from 'react-redux'
import store, { logout } from '../../store'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { email } = this.props
    return (
      <div className="popup-background">
        <br />
        <div classname="question-display question-border question-box center">
          Welcome { email }
        </div>
        <br />
        <button
        className="button popup-button popup-button-extra"
        onClick={ this.props.handleClick }
        >
          Logout
        </button>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  email: state.user.email
})

const mapDispatch = dispatch => ({
  handleClick: () => {
    return dispatch(logout())
  }
})

// may use later

// ReactDOM.render(
//   <Provider store={store} >
//     <PopupMain />
//   </Provider>,
// document.getElementById('popup'))

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

export default connect(mapState, mapDispatch)(UserHome)
