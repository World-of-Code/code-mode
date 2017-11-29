'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Login, Signup } from '../auth-form'
import { me } from '../../store'
import { UserHome } from '../'
import $ from 'jquery'
import Frame from 'react-frame-component'

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
    } else {
      this.setState({buttonToggle: true})
      chrome.storage.local.set({ action: 'show' })
    }
  }

  render () {
    const { isLoggedIn } = this.props

    return (
      <Frame>
        <link rel="stylesheet" type="text/css" href="../../../chrome/style/index.scss" />
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
      </Frame>
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
