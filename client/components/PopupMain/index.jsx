'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { me } from '../../store'
import { UserHome, Login, Signup } from '../'


class PopupMain extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const { isLoggedIn } = this.props
    return (
        <div>
        {
            isLoggedIn ? <UserHome /> :
            <div>
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
