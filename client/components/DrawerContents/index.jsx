'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { me, fetchLocation, fetchAllQuestions, fetchQuestion, getMode } from '../../store'
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
      .then(questions => {
        const sortedQuestions = questions.sort((q1, q2) => q1.id - q2.id)
        if (sortedQuestions[0]) fetchQuestion(sortedQuestions[0].id)
      })
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
            <QuestionMenu />
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
  question: state.question,
  mode: state.mode
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me()),
  fetchLocation: url => dispatch(fetchLocation(url)),
  fetchAllQuestions: url => dispatch(fetchAllQuestions(url)),
  fetchQuestion: question => dispatch(fetchQuestion(question)),
  getMode: () => dispatch(getMode())
})


export default connect(mapStateToProps, mapDispatchToProps)(DrawerContents)
