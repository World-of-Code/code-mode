'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeQuestion } from '../../store'
// import react-semantic-ui?


const DeleteButton = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.removeQuestion(props.questionId)
  }

  return (
    <button
      type="submit"
      className="mini ui button"
      style={ { margin: '0 0 0.5em 0' } }
      onClick={ () => handleSubmit() }
    >
      Delete
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  removeQuestion: question => dispatch(removeQuestion(question))
})


export default connect(null, mapDispatchToProps)(DeleteButton)
