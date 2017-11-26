'use strict'

import React from 'react'
<<<<<<< Updated upstream
// import { button } from 'semantic-ui-react'
=======
import { setMode } from '../../store'
// import react-semantic-ui?
>>>>>>> Stashed changes


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

mapDispatchToProps = dispatch => ({
  setMode: () => dispatch(setMode)
})


export default AddButton
