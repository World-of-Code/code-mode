'use strict'

import React from 'react'
// import { button } from 'semantic-ui-react'


// render add view
const AddButton = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // render QuestionDisplay/AddQuestion
    // repl thunk
  }

  return (
    <button
      type="submit"
      className="mini ui button"
      style={ { margin: '0 0 0.5em 0' } }
      onClick={ () => handleSubmit() }
    >
      Add
    </button>
  )
}


export default AddButton
