'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  me,
  fetchLocation,
  getMode,
  getQuestion,
  addQuestion,
  editQuestion,
  clearQuestion,
  saveQuestion,
  deleteQuestion,
  cancelQuestion,
  submitQuestion,
  sendQuestion
} from '../../store'


class MapButtons extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.me()
    this.props.fetchLocation(window.location.href)
    this.props.getMode()
    this.props.getQuestion()
  }

  handleClick (type) {
    const question = this.props.question
    const action = `${type}Question`

      if (type === 'delete') this.props[action](question, this.props.location.id)
      else this.props[action](question)
  }

  render () {
    const pageAdmin = this.props.user.id === this.props.location.userId
    const buttonsAvailable = this.props.mode && this.props.mode.buttons.filter(button => {
      if (button.name === 'add') return true
      // if (!this.props.question.id ) return false
      return pageAdmin ? true : false
    })
    return (
      this.props.question &&
      buttonsAvailable.map(button => (
        <div key={ button.name }>
          <button
            type="submit"
            className={ `button ${button.name}` }
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
  mode: state.mode,
  question: state.question
})

const mapDispatchToProps = dispatch => ({
  me: () => dispatch(me()),
  fetchLocation: url => dispatch(fetchLocation(url)),
  getMode: () => dispatch(getMode()),
  getQuestion: () => dispatch(getQuestion()),
  addQuestion: () => dispatch(addQuestion()),
  editQuestion: question => dispatch(editQuestion(question)),
  clearQuestion: question => dispatch(clearQuestion(question)),
  saveQuestion: question => dispatch(saveQuestion(question)),
  deleteQuestion: (question, urlId) => dispatch(deleteQuestion(question, urlId)),
  cancelQuestion: question => dispatch(cancelQuestion(question)),
  submitQuestion: question => dispatch(submitQuestion(question)),
  sendQuestion: () => dispatch(sendQuestion())
})


export default connect(mapStateToProps, mapDispatchToProps)(MapButtons)
