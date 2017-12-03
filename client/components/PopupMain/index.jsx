'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Login, Signup } from '../auth-form'
import { me } from '../../store'
import { UserHome } from '../'
import $ from 'jquery'
import Frame from 'react-frame-component'
import '../../../public/style/drawer-contents.css'


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
      <div>
        <link rel="stylesheet" type="text/css" href="../../public/style/animate.css" />

        <div className="body is-popup">
          <button
            id= "toggle"
            type="button"
            className="button is-toggle-code-mode animated bounceInDown popup-button"
            onClick={ this.handleClick }
          >
            Toggle CodeMode!
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
