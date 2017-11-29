'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import Drawer from 'rc-drawer'
import $ from 'jquery'
import { setUser } from '../../store'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import DrawerContents from '../DrawerContents'
import DrawerBar from './DrawerBar'

import 'bootstrap/dist/css/bootstrap.css'
import '../../../public/style/drawer.css'


class DrawerComponents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: false
    }
  }

  componentDidMount () {
    chrome.storage.onChanged.addListener(changes => {
      let action = changes['action']
      let user = changes['user']

      if (user) this.props.setUser(user.newValue)
      if (action && action.newValue === 'hide') {
        this.setState({display: false})
        $( '#app' ).hide()
      }
      if (action && action.newValue === 'show') {
        this.setState({display: true})
        $( '#app' ).show()
      }
    })

    chrome.storage.local.get('action', obj => {
      let foo = obj.userInput
      if (foo === 'hide') this.setState({ display: false })
      if (foo === 'show') this.setState({ display: true })
    })
  }

  render () {
    return (
      <div className="drawer-bar-all">
        {
          this.state.display
          ? <DrawerBar />
          : <div />
        }
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})


export default connect(null, mapDispatchToProps)(DrawerComponents)
