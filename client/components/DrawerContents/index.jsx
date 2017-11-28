'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { me, fetchLocation, fetchAllQuestions, getMode } from '../../store'
import {
  Repl,
  QuestionDisplay,
  QuestionMenu,
  ButtonContainer
} from '../'


class DrawerContents extends Component{
  componentDidMount () {
    this.props.me()
    this.props.fetchLocation(window.location.href)
      .then(url => { if (url) this.props.fetchAllQuestions(url) })
      .catch(err => console.log(err))
    this.props.getMode()
  }

  render () {
    return (
      <div>
        {
          this.props.location &&
          <ButtonContainer />
        }
        {
          this.props.allQuestions &&
          <div>
            <QuestionMenu questions={ this.props.allQuestions } />
            <QuestionDisplay />
          </div>
        }
        <Repl />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  user: state.user,
  location: state.location,
  allQuestions: state.allQuestions,
  mode: state.mode
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me()),
  fetchLocation: url => dispatch(fetchLocation(url)),
  fetchAllQuestions: url => dispatch(fetchAllQuestions(url)),
  getMode: () => dispatch(getmode())
})


export default connect(mapStateToProps, mapDispatchToProps)(DrawerContents)
