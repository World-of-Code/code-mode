'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Repl, QuestionDisplay, QuestionMenu, ButtonContainer } from '../'
import { fetchLocation, fetchAllQuestions, setQuestion, setModeRegister, getMode } from '../../store'


class DrawerContents extends Component{
  componentDidMount () {
    chrome.storage.local.set({ url: window.location.href })

    chrome.storage.onChanged.addListener(changes => {
      let url = changes['url']

      if (url ) {
        this.setState({display: false})
        this.props.fetchLocation(window.location.href)
        .then(url => {
          if (url){
            return this.props.fetchAllQuestions(url.location.id)
          }
        })
        .then(questions => {
          if (questions) {
            const sortedQuestions = questions.questions.slice().sort((q1, q2) => q1.id - q2.id)
            return this.props.setQuestion(sortedQuestions[0])
          }
        })
        .catch(err => console.log(err))
      this.props.getMode()
      }

    })

    this.props.fetchLocation(window.location.href)
      .then(url => {
        if (url.location.id) return this.props.fetchAllQuestions(url.location.id)
        else this.props.setModeRegister()
      })
      .then(questions => {
        if (questions) {
          const sortedQuestions = questions.questions.slice().sort((q1, q2) => q1.id - q2.id)
          return this.props.setQuestion(sortedQuestions[0])
        }
      })
      .then(this.props.getMode)
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <ButtonContainer />
        <QuestionMenu questions={ this.props.allQuestions } />
        <QuestionDisplay question={ this.props.question } />
        <Repl />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  location: state.location,
  allQuestions: state.allQuestions,
  question: state.question,
  mode: state.mode
})

const mapDispatchToProps = dispatch => ({
  fetchLocation: url => dispatch(fetchLocation(url)),
  fetchAllQuestions: url => dispatch(fetchAllQuestions(url)),
  setQuestion: question => dispatch(setQuestion(question)),
  setModeRegister: () => dispatch(setModeRegister()),
  getMode: () => dispatch(getMode())
})


export default connect(mapStateToProps, mapDispatchToProps)(DrawerContents)
