'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
<<<<<<< Updated upstream
import { fetchLocation } from '../../store'
=======
import { me, fetchLocation } from '../../store'
>>>>>>> Stashed changes
import {
  Repl,
  QuestionDisplay,
  QuestionMenu,
  AddButton,
  EditButton,
  DeleteButton
} from '../'


class DrawerContents extends Component{
<<<<<<< Updated upstream
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
=======
  componentDidMount () {
    this.props.me()
    this.props.fetchLocation(window.location.href)
>>>>>>> Stashed changes
  }

  render () {
    return (
      <div>
        <AddButton />

        {  user.id === location.userId &&
<<<<<<< Updated upstream
          <EditButton />
          <DeleteButton />
        }

        <QuestionMenu handleClick={ this.handleClick } />
        <QuestionDisplay question={ this.state.question } />
        <Repl question={ this.state.question } boilerplate={ this.state.boilerplate } />
=======
          <div>
            <EditButton />
            <DeleteButton />
          </div>
        }

        <QuestionMenu location={ this.props.location } />
        <QuestionDisplay />
        <Repl />
>>>>>>> Stashed changes
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  location: state.location
})

const mapDispatchToProps = dispatch => ({
<<<<<<< Updated upstream
  user: state.user,
  fetchLocation: locationId => dispatch(fetchLocation(locationId))
=======
  me: () => dispatch(me()),
  fetchLocation: url => dispatch(fetchLocation(url))
>>>>>>> Stashed changes
})


export default connect(mapStateToProps, mapDispatchToProps)(DrawerContents)
