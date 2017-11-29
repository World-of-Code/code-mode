'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import Drawer from 'rc-drawer'
import $ from 'jquery'
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


export default class DrawerComponents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: true
    }
  }

  componentDidMount () {
    chrome.storage.onChanged.addListener(changes => {
      let action = changes['action']
      if(action.newValue === 'hide') {
        this.setState({display: false})
         $( '#app' ).hide()
      }
      if(action.newValue === 'show') {
        this.setState({display: true})
         $( '#app' ).show()
      }
    })

    chrome.storage.local.get('action', obj => {
      let visibility = obj.userInput
      if(visibility === 'hide') this.setState({ display: false })
      if(visibility === 'show') this.setState({ display: true })
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
