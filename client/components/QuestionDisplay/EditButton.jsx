'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeQuestion } from '../../store'
// import react-semantic-ui?


const EditButton = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.changeQuestion(props.questionId)
  }

  return (
    <button
      type="submit"
      className="mini ui button"
      style={ { margin: '0 0 0.5em 0' } }
      onClick={ () => handleSubmit() }
    >
      Edit
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  changeQuestion: question => dispatch(changeQuestion(question))
})


export default connect(null, mapDispatchToProps)(EditButton)
