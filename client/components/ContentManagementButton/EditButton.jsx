'use strict'

import React from 'react'
// import react-semantic-ui?


// render edit view
const EditButton = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // render QuestionDisplay/EditQuestion
    // repl thunk
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


export default EditButton
