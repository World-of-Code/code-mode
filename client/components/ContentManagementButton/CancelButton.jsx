'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestion } from '../../store'
// import react-semantic-ui?


// cancel update when editing
const CancelButton = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.fetchQuestion(props.questionId) // pass in question id as prop / render read view
    // repl thunk
  }

  return (
    <button
      type="submit"
      className="mini ui button"
      style={ { margin: '0 0 0.5em 0' } }
      onClick={ () => handleSubmit() }
    >
      Cancel
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchQuestion: questionId => dispatch(fetchQuestion(questionId))
})


export default connect(null, mapDispatchToProps)(CancelButton)
