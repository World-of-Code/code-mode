'use strict'

import React from 'react'
import MapButtons from './MapButtons'


// Renders different states based on button clicked
const ButtonContainer = props => {
  const questionContainer = props.mode ? 'question-container' : ''

  return (
    <div className={ `row pad-sides-more ${questionContainer}` } >
      <MapButtons setStateInDrawer={ props.setStateInDrawer } />
    </div>
  )
}


export default ButtonContainer
