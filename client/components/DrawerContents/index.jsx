'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Repl, QuestionDisplay, QuestionMenu, ButtonContainer } from '../'
import { fetchLocation, fetchAllQuestions, setQuestion, setModeRegister } from '../../store'


class DrawerContents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      action: '',
      oldUrl: '',
      urlNew: true
    }
    this.setStateInDrawer = this.setStateInDrawer.bind(this)
    this.clearStateInDrawer = this.clearStateInDrawer.bind(this)
  }

  componentDidMount () {
    chrome.storage.onChanged.addListener(changes => {
      let url = changes['url']
      if (url && url.newValue !== this.state.oldUrl) {
        this.setState({ oldUrl: url })
        window.location.reload()
      }
    })
    setInterval(() => {
      chrome.storage.local.set({ url: window.location.href })
    }, 1000)

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
      .catch(err => console.log(err))
  }

  setStateInDrawer (action) {
    this.setState({ action })
  }

  clearStateInDrawer () {
    this.setState({ action: '' })
  }

  render () {
    const { mode, user, question, allQuestions } = this.props
    const type = mode.type
    const loggedIn = user && user.id
    const addOrEdit = mode && type === 'Add' || type === 'Edit'

    return (
      <div>
        {
          mode && type === 'Add' || type === 'Edit'
          ? <ButtonContainer setStateInDrawer={ this.setStateInDrawer } />
          : ''
        } {
          mode && type !== 'Add' && type !== 'Edit' &&
          <QuestionMenu questions={ allQuestions } />
        } {
          question.id || mode && type !== 'Read'
          ? <QuestionDisplay
              question={ question }
              action={ this.state.action }
              clearStateInDrawer={ this.clearStateInDrawer }
            />
          : ''
        } {
          loggedIn && mode && type !== 'Add' && type !== 'Edit' &&
          <ButtonContainer
            setStateInDrawer={ this.setStateInDrawer }
            mode={ mode }
          />
        } {
          mode && type !== 'Add' && type !== 'Edit' &&
          <Repl />
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  location: state.location,
  allQuestions: state.allQuestions,
  question: state.question,
  mode: state.mode,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  fetchLocation: url => dispatch(fetchLocation(url)),
  fetchAllQuestions: url => dispatch(fetchAllQuestions(url)),
  setQuestion: question => dispatch(setQuestion(question)),
  setModeRegister: () => dispatch(setModeRegister())
})


export default connect(mapStateToProps, mapDispatchToProps)(DrawerContents)
