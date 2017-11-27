'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  me,
  fetchLocation,
  addQuestion,
  editQuestion,
  clearQuestion,
  saveQuestion,
  deleteQuestion,
  cancelQuestion,
  submitQuestion,
  sendQuestion
} from '../../store'


const handleClick = type => {
  const action = `${type}Question`
  this.props.action(this.props.question)
}

const MapQuestions = props => {
  const pageAdmin = props.user.id === props.location.userId
  const buttonsAvailable = props.mode && props.mode.buttons.filter(button => {
    if (button.type === 'Add') return true
    if (!question.id) return false
    return pageAdmin ? true : false
  })

  return (
    buttonsAvailable.map(button =>
      (
        <div key={ button.name }>
          <button
            type="submit"
            className={ `button ${button.name}` }
            onClick={ () => handleClick(button.name) }
          >
            { button.name }
          </button>
        </div>
      )
    )
  )
}

const mapStateToProps = state => ({
  user: state.user,
  location: state.location,
  mode: state.mode,
  question: state.question
})


export default connect(mapStateToProps)(MapQuestions)
