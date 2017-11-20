'use strict'

import React from 'react'
// import react-semantic-ui?


// submit content when adding / editing
const SubmitButton = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.questionAction(props.question) // action is thunk (edit or add) passed in as prop
    // repl thunk
  }

  return (
    <button
      type="submit"
      className="mini ui button"
      style={ { margin: '0 0 0.5em 0' } }
      onClick={ () => handleSubmit() }
    >
      Submit
    </button>
  )
}


export default SubmitButton
