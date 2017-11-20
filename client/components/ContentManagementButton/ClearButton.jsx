'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { eraseQuestion } from '../../store'
// import react-semantic-ui?


// clear content when adding
const ClearButton = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.eraseQuestion() // maintain add view
    // repl thunk
  }

  return (
    <button
      type="submit"
      className="mini ui button"
      style={ { margin: '0 0 0.5em 0' } }
      onClick={ () => handleSubmit() }
    >
      Clear
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  eraseQuestion: () => dispatch(eraseQuestion())
})


export default connect(null, mapDispatchToProps)(ClearButton)
