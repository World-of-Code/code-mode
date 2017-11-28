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


const MapButtons = props => {
  const pageAdmin = props.user.id === props.location.userId
  const buttonsAvailable = props.mode && props.mode.buttons.filter(button => {
    if (button.type === 'Add') return true
    if (!question.id) return false
    return pageAdmin ? true : false
  })

  const handleClick = type => {
    const question = props.question
    const action = `${type}Question`

    props[action](question, props.location.id)

    // if (type === 'delete') {
    //   this.props.nextQuestion(question.id, props.location.id)
    //     .then(props.deleteQuestion(question.id))
    //     .catch(err => console.log(err))
    // }
    // else this.props[action](props.question)
  }

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

const mapDispatchToProps = dispatch => ({
  me,
  fetchLocation,
  addQuestion,
  editQuestion,
  clearQuestion,
  saveQuestion,
  deleteQuestion,
  cancelQuestion,
  submitQuestion,
  sendQuestion: () => dispatch(sendQuestion())
})


export default connect(mapStateToProps, mapDispatchToProps)(MapButtons)
