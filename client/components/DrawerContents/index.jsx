'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchLocation } from '../../store'
import {
  Repl,
  QuestionDisplay,
  QuestionMenu,
  AddButton,
  EditButton,
  DeleteButton
} from '../'


class DrawerContents extends Component{
  constructor( props) {
    super(props)
    this.state = {
      question: {},
      boilerplate: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    //get user
    this.props.fetchLocation() // id or url
  }

  handleClick (question, boilerplate) {
    this.setState({ question, boilerplate })
  }

  render () {
    return (
      <div>
        <AddButton />

        {  user.id === location.userId &&
          <EditButton />
          <DeleteButton />
        }

        <QuestionMenu handleClick={ this.handleClick } />
        <QuestionDisplay question={ this.state.question } />
        <Repl question={ this.state.question } boilerplate={ this.state.boilerplate } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  user: state.user,
  fetchLocation: locationId => dispatch(fetchLocation(locationId))
})


export default connect(mapStateToProps, mapDispatchToProps)(DrawerContents)
