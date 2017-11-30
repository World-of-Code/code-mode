'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addQuestion,
  editQuestion,
  clearQuestion,
  saveQuestion,
  deleteQuestion,
  cancelQuestion,
  submitQuestion,
  sendQuestion,
  registerLocation
} from '../../store'


class MapButtons extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (type) {
    const { question, allQuestions, location, user } = this.props
    const action = type === 'register' ? `${type}Location` : `${type}Question`
    if (type === 'delete') this.props[action](question, allQuestions)
    else if (type === 'register') this.props[action](window.location.href)
    else this.props[action](question, user)
  }

  render () {
    console.log('mode ', this.props.mode)
    const questionCreator = this.props.user.id === this.props.question.userId
    const buttonsAvailable = this.props.mode && this.props.mode.buttons.filter(button => {
      if (button.name === 'add') return true
      if (this.props.mode.type === 'Add') return true
      if (this.props.mode.type === 'Register') return true
      return questionCreator && this.props.question.id
    })

    return (
      this.props.question &&
      buttonsAvailable.map(button => (
        <div key={ button.name }>
          <button
            type="submit"
            className="button"
            onClick={ () => this.handleClick(button.name) }
          >
            { button.name }
          </button>
        </div>
      ))
    )
  }

}


const mapStateToProps = state => ({
  user: state.user,
  location: state.location,
  question: state.question,
  allQuestions: state.allQuestions,
  mode: state.mode
})

const mapDispatchToProps = dispatch => ({
  addQuestion: () => dispatch(addQuestion()),
  editQuestion: question => dispatch(editQuestion(question)),
  clearQuestion: question => dispatch(clearQuestion(question)),
  saveQuestion: question => dispatch(saveQuestion(question)),
  deleteQuestion: (question, urlId) => dispatch(deleteQuestion(question, urlId)),
  cancelQuestion: question => dispatch(cancelQuestion(question)),
  submitQuestion: question => dispatch(submitQuestion(question)),
  sendQuestion: () => dispatch(sendQuestion()),
  registerLocation: url => dispatch(registerLocation(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(MapButtons)
