'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Login, Signup } from '../auth-form'
import { me } from '../../store'
import { UserHome } from '../'
import $ from 'jquery'


class PopupMain extends Component {
  constructor(){
    super()
    this.state = {
      buttonToggle: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.loadInitialData()
  }

  handleClick () {
    if(this.state.buttonToggle === true) {
      this.setState({buttonToggle: false})
      chrome.storage.local.set({ action: 'hide' })
      // chrome.management.setEnabled("fbmlhcnipimamepnadolaoblelnadblo", false)
    } else {
      this.setState({buttonToggle: true})
      chrome.storage.local.set({ action: 'show' })
      //chrome.management.setEnabled("fbmlhcnipimamepnadolaoblelnadblo", true)
    }
  }

  render () {
    const { isLoggedIn } = this.props

    return (
      <div>
          <button id = "toggle" type="button" onClick={ this.handleClick }>
            toggle popup
          </button>
        {
            isLoggedIn
            ? <UserHome />
            : <div>
                <Login />
                <Signup />
              </div>
        }
      </div>
    )
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me())
})


export default connect(mapState, mapDispatch)(PopupMain)
